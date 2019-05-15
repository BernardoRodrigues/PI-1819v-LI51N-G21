'use strict'
module.exports = function(service, router) {

    if(!service)
        throw new Error("Service must be injected")
    if (!router) {
        throw new Error("Router must be injected")
    }

    const Playlist = require('./model/playlist-model')
    const PlaylistInfo = require('./model/playlist-info-model')
    const Track = require('./model/track-model')

    router.post('/', createPlaylist)
        .get(getPlaylists)

    router.delete('/:playlistId', deletePlaylist)
        .put(updatePlaylist)
        .get(getPlaylistInfo)

    router.put('/:playlistId/track', api.addMusicToPlaylist)
        .delete(removeMusicFromPlaylist)

    async function createPlaylist(req, resp) {
        const name = req.body.name
        const description = req.body.description
        try {
            return service.createPlaylist(Playlist.init(undefined, name, description))
            .then(mapPlaylistDtoToPlaylist)
            .then((result) => {result, resp, 201})
            .catch((err) => handleError(err, resp))  
        } catch(error) {
            handleError(err, resp)
        }
    }

    async function deletePlaylist(req, resp) {
        const playlistId = req.params.playlistId
        try {
            return service
                    .deletePlaylist(Playlist.init(playlistId))
                    .then(mapPlaylistDtoToPlaylist)
                    .then((result) => {result, resp, 200})
                    .then(handleResponse)
                    .catch(err => handleError(err, resp))
        } catch(err) {
            handleError(err, resp)
        }
    }

    async function updatePlaylist(req, resp) {
        const playlistId = req.params.playlistId
        const name = req.body.name
        const description = req.body.description    
        try {
            return service.updatePlaylist(Playlist.init(playlistId, name, description))
            .then(mapPlaylistDtoToPlaylist)
            .then((result) => {result, resp, 200})
            .then(handleResponse)
            .catch(err => handleError(err, resp))
        } catch(err) {
            handleError(err, resp)
        } 
    }

    async function getPlaylists(req, resp) {
        try {
            return service
                    .getPlaylists()
                    .then(mapMultiplePlaylistsDtoToPlaylist)
                    .then((result) => {result, resp, 200})
                    .then(handleResponse)
                    .catch(err => handleError(err, resp))
        } catch(err) {
            handleError(err, resp)
        }
    }

    async function getPlaylistInfo(req, resp) {
        const playlistId = req.params.playlistId
        try {
            return service
                    .getPlaylistInfo(Playlist.init(playlistId))
                    .then(mapPlaylistInfoDtoToPlaylistInfo)
                    .then((result) => {result, resp, 200})
                    .then(handleResponse)
                    .catch(err => handleError(err, resp))
        } catch(err) {
            handleError(err, resp)
        }
    }

    async function addMusicToPlaylist(req, resp) {
        const playlistId = req.params.playlistId
        const tracks = req.body.tracks
        try {
            return service
                    .addMusicToPlaylist(
                        Playlist.init(playlistId, undefined, undefined, 
                            tracks.map(t => Track.init(t.name, t.url, t.duration, t.artist))))
                    .then(mapMultipleTracksDtoToTrack)
                    .then((result) => {result, resp, 200})
                    .then(handleResponse)
                    .catch(err => handleError(err, resp))
        } catch(err) {
            handleError(err, resp)
        }
    }

    async function removeMusicFromPlaylist(req, resp) {
        const playlistId = req.params.playlistId
        const tracks = req.body.tracks
        try {
            return service
                    .removeMusicFromPlaylist(
                        Playlist.init(playlistId, undefined, undefined, 
                            tracks.map(t => Track.init(t.name, t.url, t.duration, t.artist))))
                    .then(mapMultipleTracksDtoToTrack)
                    .then((result) => {result, resp, 200})
                    .then(handleResponse)
                    .catch(err => handleError(err, resp))
        } catch(err) {
            handleError(err, resp)
        }
    }

    // Mappers

    function mapPlaylistInfoDtoToPlaylistInfo(playlistInfoDto) {
        return PlaylistInfo.init(playlistInfoDto.id, playlistInfoDto.name,
            playlistInfoDto.description, playlistInfoDto.totalDuration, 
            playlistInfoDto.tracks? playlistInfoDto.tracks.map(mapTrackDtoToTrack):[])
    }

    function mapMultipleTracksDtoToTrack(result) {
        return result.map(mapTrackDtoToTrack)
    }

    function mapTrackDtoToTrack(track) {
        return Track.init(track.name, track.url, track.duration, track.artist)
    }

    
    function mapMultiplePlaylistsDtoToPlaylist(result) {
        return result.map(mapPlaylistDtoToPlaylist)
    }

    
    function mapPlaylistDtoToPlaylist(playlistDto) {
        return Playlist.init(playlistDto.id, playlistDto.name, playlistDto.description, 
            playlistDto.tracks? playlistDto.tracks.map(mapTrackDtoToTrack):[])
    }

    function handleResponse({result, resp, statusCode}) {
        resp.statusCode = status
        resp.setHeader('Content-Type', 'application/json')
        resp.end(JSON.stringify(result))
    }

    function handleError(err, resp) {
        resp.statusCode = err.statusCode
        resp.end(JSON.stringify({
            message: err.message,
            statusCode: err.statusCode
        }))
    }

    return router
}