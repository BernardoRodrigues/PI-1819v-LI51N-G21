module.exports = function() {
    const request = require('request')
    const InvalidParametersError = require('./invalid-paramters-error')
    const endpoints = require('./../config/endpoints')
    const Track = require('./model/track-dto-model')
    const Playlist = require('./model/playlist-dto-model')
    const PlaylistInfo = require('./model/playlist-info-dto-model')
    const Artist = require('./model/artist-dto-model')

    function handleResponse(err, result, cb) {
        if (err) {
            console.log(err)
            throw err
        }
        cb(result)
    }

    function createPlaylist(playlist, cb) {
        if (!playlist || !playlist.name || playlist.name.length === 0) 
            throw new InvalidParametersError('Playlist name is required')
        const body = {name: playlist.name, description: playlist.description}
        return request
            .post(endpoints.createPlaylistEndpoint(), 
            {body: body, json: body }, (err, resp, body) => {
                if (err) throw err
                const result = body
                const tracks = {tracks: []}
                request.put(endpoints.createTracksListEndpoint(result._id), {
                    body: tracks, json: tracks
                }, (err, resp, _) => {
                    if(err) throw err
                    cb(mapPlaylistCreated(result, playlist))
                })
            })
    }

    function mapPlaylistCreated(result, playlist) {
        return Playlist.init(result._id, playlist.name, playlist.description, [])
    }

    function deletePlaylist(playlist, cb) {
        if (!playlist || !playlist.id || playlist.id.length === 0)
            throw new InvalidParametersError('Playlist id is required') 
        request.delete(endpoints.deleteTracksListEndpoint(playlist.id), (err, resp, firstBody) => {
            if (err && resp.statusCode === 404) 
                throw new InvalidParametersError(`Playlist with id ${playlist.id} was not found`, 404)
            request.delete(
                endpoints.deletePlaylistEndpoint(playlist.id),
                (err, resp, body) => {
                    if (err) throw new InvalidParametersError(`Playlist with id ${playlist.id} was not found`, 404)
                    cb(mapDeletePlaylistResponse(firstBody, body))
                })
        }) 
    }

    function mapDeletePlaylistResponse(firstResult, result) {
        return Playlist.init(firstResult._id, firstResult.name, firstResult.description, result.tracks)
    }

    function updatePlaylist(playlist, cb) {
        if (!playlist || !playlist.id || playlist.id.length === 0)
            throw new InvalidParametersError('Playlist id is required') 
        const body = {name: playlist.name, description: playlist.description}
        return request.put(
            endpoints.updatePlaylistEndpoint(playlist.id),
            {body: body, json: body},
            (err, resp, body) => 
            handleResponse(err, mapPlaylistUpdateResponse(playlist), cb)
        )
    }

    function mapPlaylistUpdateResponse(playlist) {
        return Playlist.init(playlist.id, playlist.name, playlist.description, [])
    }

    function getPlaylists(cb) {
        return request.get(
            endpoints.getAllPlaylistsEndpoint(),
            (err, resp, body) => handleResponse(err, mapMultiplePlaylists(body), cb)
        )
    }

    function mapMultiplePlaylists(result) {
        return result.hits.hits.map(p => Playlist.init(p._id, p._source.name, p._source.description, []))
    }

    function getPlaylistInfo(playlist, cb) {
        if (!playlist || !playlist.id || playlist.id.length === 0) {
            throw new InvalidParametersError('Playlist id is required') 
        }
        return request.get(
            endpoints.getPlaylistEndpoint(playlist.id),
            (err, resp, body) => {
                if (err) throw err
                const pl = body
                request.get(endpoints.getTracksListEndpoint(playlist.id), (err, resp, body) => {
                    const tracks = body._source.tracks
                    cb( 
                        PlaylistInfo.init(pl._id, 
                            pl._source.name, 
                            pl._source.description,
                            tracks.reduce((acc, t) => acc + t.duration),
                            tracks.map(t => Track.init(t.name, t.url, t,duration, 
                                Artist.init(t.artist.name, t.artist.mbid, t.artist.url)))
                            ))
                })
            }
        )
    }

    function addMusic(playlist, cb) {
        if (!playlist || !playlist.id || playlist.id.length === 0)
            throw new InvalidParametersError('Playlist id is required') 
        if (!playlist.tracks || playlist.tracks.length === 0)
            throw new InvalidParametersError('Can not add empty music list is required') 
        return request.put(
            endpoints.updatePlaylistEndpoint(playlist.id),
            {body: playlist.tracks, json: requestBody},
            (err, resp, body) => handleResponse(err, playlist.tracks, cb)
        )
    }

    function deleteMusic(playlist, cb) {
        if (!playlist || !playlist.id || playlist.id.length === 0)
            throw new InvalidParametersError('Playlist id is required') 
        return request.put(
            endpoints.updatePlaylistEndpoint(playlist.id),
            {
                body: playlist.tracks,
                json: tracks
            },
            (err, resp, body) => handleResponse(err, playlist.tracks, cb)
        )
    }

    return {
        createPlaylist: createPlaylist,
        deletePlaylist: deletePlaylist,
        updatePlaylist: updatePlaylist,
        getPlaylists: getPlaylists,
        getPlaylistInfo: getPlaylistInfo,
        addMusicToPlaylist: addMusic,
        removeMusicFromPlaylist: deleteMusic
    }
    
}()