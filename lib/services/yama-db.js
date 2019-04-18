module.exports = function() {
    const request = require('request')
    const endpoints = require('./../config/endpoints')
    const Track = require('./model/track-dto-model').default
    const Playlist = require('./model/playlist-dto-model').default
    const PlaylistInfo = require('./model/playlist-info-dto-model').default
    const Artist = require('./model/artist-dto-model').default

    function handleResponse(err, body, cb) {
        if (err) {
            console.log(err)
            throw err
        }
        cb(body)
    }

    function createPlaylist(name, description = '', cb) {
        if (!name || name === null || name.length === 0) throw err
        const body = {name: name, description: description}
        return request
            .post(endpoints.createPlaylistEndpoint(), 
            {body: body, json: body }, (err, resp, body) => {
                if (err) throw err
                const result = JSON.parse(body)
                const tracks = {tracks: []}
                request.put(endpoints.createTracksListEndpoint(result._id), {
                    body: tracks, json: tracks
                }, (err, resp, _) => {
                    if(err) throw err
                    cb(JSON.parse(body))
                })
            })
    }

    function deletePlaylist(playlistId, cb) {
        request.delete(endpoints.deleteTracksListEndpoint(playlistId), (err, resp, body) => {
            if (err) throw err
            request.delete(
                endpoints.deletePlaylistEndpoint(playlistId),
                (err, resp, body) => handleResponse(err, body, cb))
        }) 
    }

    function updatePlaylist(name, description, playlistId, cb) {
        if (!name || name === null || name.length === 0) throw err
        const body = {name: name,description: description}
        return request.put(
            endpoints.updatePlaylistEndpoint(playlistId),
            {body: body, json: body},
            (err, resp, body) => handleResponse(err, body, cb)
        )
    }

    function getPlaylists(cb) {
        return request.get(
            endpoints.getAllPlaylistsEndpoint(),
            (err, resp, body) => handleResponse(err, body, cb)
        )
    }

    function getPlaylistInfo(playlistId, cb) {
        return request.get(
            endpoints.getPlaylistEndpoint(playlistId),
            (err, resp, body) => {
                if (err) throw err
                const playlist = JSON.parse(body)
                request.get(endpoints.getTracksListEndpoint(playlistId), (err, resp, body) => {
                    const tracks = JSON.parse(body)._source.tracks
                    cb(null, 
                        PlaylistInfo.init(playlist._id, 
                            playlist._source.name, 
                            playlist._source.description,
                            tracks.reduce((acc, t) => acc + t.duration),
                            tracks.map(t => Track.init(t.name, t.url, t,duration, 
                                Artist.init(t.artist.name, t.artist.mbid, t.artist.url)))
                            ))
                })
            }
        )
    }
    // TODO add mapping functions
    // TODO change hardcoded endpoints to endpoints module
    function addMusic(playlistId, tracks, cb) {
        return request.put(
            endpoints.updatePlaylistEndpoint(playlistId),
            {body: tracks, json: requestBody},
            (err, resp, body) => handleResponse(err, body, cb)
        )
    }

    function deleteMusic(playlistId, tracks, cb) {    //tracksId???
        return request.put(
            endpoints.updatePlaylistEndpoint(playlistId),
            {
                body: tracks,
                json: tracks
            },
            (err, resp, body) => handleResponse(err, body, cb)
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