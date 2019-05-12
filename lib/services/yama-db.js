module.exports = function(request) {
    
    const InvalidParametersError = require('./invalid-paramters-error')
    const ServerDownError = require('./server-down-error')
    const endpoints = require('./../config/endpoints')
    const Track = require('./model/track-dto-model')
    const Playlist = require('./model/playlist-dto-model')
    const PlaylistInfo = require('./model/playlist-info-dto-model')
    const Artist = require('./model/artist-dto-model')

    function handleServerError(err) {
        if (err.statusCode === 500) {
            throw new ServerDownError('Elastic Search is down', 500)
        }
    }

    async function createPlaylist(playlist) {
        if (!playlist || !playlist.name || playlist.name.length === 0) 
            throw new InvalidParametersError('Playlist name is required', 400)
        const body = {name: playlist.name, description: playlist.description}
        const result = await request
            .post(endpoints.createPlaylistEndpoint(), { body: body, json: true })
            .catch(handleServerError);
        const tracks = {tracks: []};
        await request
                    .put(endpoints.createTracksListEndpoint(result._id), { body: tracks, json: true })
                    .catch(handleServerError);
        return await mapPlaylistCreated(result._id, playlist);
    }

    async function mapPlaylistCreated(id, playlist) {
        return Playlist.init(id, playlist.name, playlist.description, [])
    }

    const request = require('request-promise')

    async function deletePlaylist(playlist) {
        if (!playlist || !playlist.id || playlist.id.length === 0)
            throw new InvalidParametersError('Playlist id is required', 400) 
        const result = await request.delete(endpoints.deleteTracksListEndpoint(playlist.id), {json: true})
                .catch(handleNonExistantPlaylistError)
                .catch(handleServerError)
        const secondResult = 
                await request.delete(endpoints.deletePlaylistEndpoint(playlist.id), {json: true})
                .catch(handleNonExistantPlaylistError)
                .catch(handleServerError)
        return await mapDeletePlaylistResponse(result, secondResult)
    }

    function handleNonExistantPlaylistError(err) {
        if (err.statusCode === 404) 
            throw new InvalidParametersError(`Playlist was not found`, 400)
    }

    function mapDeletePlaylistResponse(firstResult, result) {
        return Playlist.init(firstResult._id, firstResult.name, firstResult.description, result.tracks)
    }

    async function updatePlaylist(playlist) {
        if (!playlist || !playlist.id || playlist.id.length === 0)
            throw new InvalidParametersError('Playlist id is required', 400) 
        const body = {name: playlist.name, description: playlist.description}
        const result = await request
                    .put(endpoints.updatePlaylistEndpoint(playlist.id), {body: body, json: true})
                    .catch(handleNonExistantPlaylistError)
                    .catch(handleServerError)
        return await mapPlaylistUpdateResponse(playlist)
    }

    function mapPlaylistUpdateResponse(playlist) {
        return Playlist.init(playlist.id, playlist.name, playlist.description, [])
    }

    async function getPlaylists() {
        const result = await request
            .get(endpoints.getAllPlaylistsEndpoint(), {json: true})
            .catch(handleServerError)
        return await mapMultiplePlaylists(result)
    }

    function mapMultiplePlaylists(result) {
        return result.hits.hits.map(p => Playlist.init(p._id, p._source.name, p._source.description, []))
    }

    async function getPlaylistInfo(playlist) {
        if (!playlist || !playlist.id || playlist.id.length === 0) {
            throw new InvalidParametersError('Playlist id is required', 400) 
        }
        const result = await request.get(endpoints.getPlaylistEndpoint(playlist.id), {json: true})
                            .catch(handleNonExistantPlaylistError)
                            .catch(handleServerError)
        const tracks = await request.get(endpoints.getTracksListEndpoint(playlist.id), {json: true})
                            .catch(handleNonExistantPlaylistError)
                            .catch(handleServerError)
                            .then((result) => result._source.tracks)
        return await mapPlaylistInfo(result, tracks)
    }

    function mapPlaylistInfo(result, tracks) {
        return PlaylistInfo.init(pl._id, 
            result._source.name, 
            result._source.description,
            mapDuration(tracks),
            tracks.map(t => 
                Track.init(t.name, t.url, t.duration || 0, 
                    Artist.init(t.artist.name, t.artist.mbid, t.artist.url)
                )
            )
        )
    }

    function mapDuration(tracks) {
        let duration = 0
        tracks.forEach(element => {
            duration += parseInt(element.duration) || 0
        });
        return duration
    }

    async function addMusic(playlist) {
        if (!playlist || !playlist.id || playlist.id.length === 0)
            throw new InvalidParametersError('Playlist id is required', 400) 
        if (!playlist.tracks || playlist.tracks.length === 0)
            throw new InvalidParametersError('Can not add empty music list is required', 400) 
        const requestBody = playlist.tracks
        return await request.put(
            endpoints.updatePlaylistEndpoint(playlist.id), {body: requestBody, json: true})
            .then(() => playlist.tracks)
            .catch(handleNonExistantPlaylistError)
            .catch(handleServerError)
    }

    async function deleteMusic(playlist) {
        if (!playlist || !playlist.id || playlist.id.length === 0)
            throw new InvalidParametersError('Playlist id is required', 400) 
        const requestBody = playlist.tracks
        return await request
            .put(endpoints.updatePlaylistEndpoint(playlist.id), {body: requestBody, json: true})
            .then(() => playlist.tracks)
            .catch(handleNonExistantPlaylistError)
            .catch(handleServerError)
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
    
}