module.exports = function (service, router) {

    if (!service)
        throw new Error("Service must be injected")
    if (!router) {
        throw new Error("Router must be injected")
    }

    const Playlist = require('./model/playlist-model')
    const PlaylistInfo = require('./model/playlist-info-model')
    const Track = require('./model/track-model')

    router.get('/', getPlaylists)
        .post(createPlaylist)

    router.delete('/:playlistId', deletePlaylist)
    router.put('/:playlistId', updatePlaylist)
    router.get('/:playlistId', getPlaylistInfo)

    router.put('/:playlistId/track', addMusicToPlaylist)
        .delete(removeMusicFromPlaylist)

    function createPlaylist(req, resp) {
        const name = req.body.name
        const description = req.body.description
        try {
            return service.createPlaylist(Playlist.init(undefined, name, description))
                .then(mapPlaylistDtoToPlaylist)
                .then((obj) => {return {result: obj, res: resp, status: 200}})
                .then(response)
                .catch((err) =>
                    response({
                        result: {
                            message: err.message,
                            statusCode: err.statusCode
                        },
                        resp,
                        status: err.statusCode
                    }))
        } catch (err) {
            response({
                result: {
                    message: err.message,
                    statusCode: err.statusCode
                },
                resp,
                status: err.statusCode
            })
        }
    }

    function deletePlaylist(req, resp) {
        const playlistId = req.params.playlistId
        try {
            return service
                .deletePlaylist(Playlist.init(playlistId))
                .then(mapPlaylistDtoToPlaylist)
                .then((obj) => {return {result: obj, res: resp, status: 200}})
                .then(response)
                .catch((err) =>
                    response({
                        result: {
                            message: err.message,
                            statusCode: err.statusCode
                        },
                        resp,
                        status: err.statusCode
                    }))
        } catch (err) {
            response({
                result: {
                    message: err.message,
                    statusCode: err.statusCode
                },
                resp,
                status: err.statusCode
            })
        }
    }

    function updatePlaylist(req, resp) {
        const playlistId = req.params.playlistId
        const name = req.body.name
        const description = req.body.description
        try {
            return service.updatePlaylist(Playlist.init(playlistId, name, description))
                .then(mapPlaylistDtoToPlaylist)
                .then((obj) => {return {result: obj, res: resp, status: 200}})
                .then(response)
                .catch((err) =>
                    response({
                        result: {
                            message: err.message,
                            statusCode: err.statusCode
                        },
                        resp,
                        status: err.statusCode
                    }))
        } catch (err) {
            response({
                result: {
                    message: err.message,
                    statusCode: err.statusCode
                },
                resp,
                status: err.statusCode
            })
        }
    }

    function getPlaylists(req, resp) {
        try {
            return service
                .getPlaylists()
                .then(mapMultiplePlaylistsDtoToPlaylist)
                .then((obj) => {return {result: obj, res: resp, status: 200}})
                .then(response)
                .catch((err) =>
                    response({
                        result: {
                            message: err.message,
                            statusCode: err.statusCode
                        },
                        resp,
                        status: err.statusCode
                    }))
        } catch (err) {
            response({
                result: {
                    message: err.message,
                    statusCode: err.statusCode
                },
                resp,
                status: err.statusCode
            })
        }
    }

    function getPlaylistInfo(req, resp) {
        const playlistId = req.params.playlistId
        try {
            return service
                .getPlaylistInfo(Playlist.init(playlistId))
                .then(mapPlaylistInfoDtoToPlaylistInfo)
                .then((obj) => {return {result: obj, res: resp, status: 200}})
                .then(response)
                .catch((err) =>
                    response({
                        result: {
                            message: err.message,
                            statusCode: err.statusCode
                        },
                        resp,
                        status: err.statusCode
                    }))
        } catch (err) {
            response({
                result: {
                    message: err.message,
                    statusCode: err.statusCode
                },
                resp,
                status: err.statusCode
            })
        }
    }

    function addMusicToPlaylist(req, resp) {
        const playlistId = req.params.playlistId
        const tracks = req.body.tracks
        try {
            return service
                .addMusicToPlaylist(
                    Playlist.init(playlistId, undefined, undefined,
                        tracks.map(t => Track.init(t.name, t.url, t.duration, t.artist))))
                .then(mapMultipleTracksDtoToTrack)
                .then((obj) => {return {result: obj, res: resp, status: 200}})
                .then(response)
                .catch((err) =>
                    response({
                        result: {
                            message: err.message,
                            statusCode: err.statusCode
                        },
                        resp,
                        status: err.statusCode
                    }))
        } catch (err) {
            response({
                result: {
                    message: err.message,
                    statusCode: err.statusCode
                },
                resp,
                status: err.statusCode
            })
        }
    }

    function removeMusicFromPlaylist(req, resp) {
        const playlistId = req.params.playlistId
        const tracks = req.body.tracks
        try {
            return service
                .removeMusicFromPlaylist(
                    Playlist.init(playlistId, undefined, undefined,
                        tracks.map(t => Track.init(t.name, t.url, t.duration, t.artist))))
                .then(mapMultipleTracksDtoToTrack)
                .then((obj) => {return {result: obj, res: resp, status: 200}})
                .then(response)
                .catch((err) =>
                    response({
                        result: {
                            message: err.message,
                            statusCode: err.statusCode
                        },
                        res: resp,
                        status: err.statusCode
                    }))
        } catch (err) {
            response({
                result: {
                    message: err.message,
                    statusCode: err.statusCode
                },
                resp,
                status: err.statusCode
            })
        }
    }

    // Mappers

    function mapPlaylistInfoDtoToPlaylistInfo(playlistInfoDto) {
        return PlaylistInfo.init(playlistInfoDto.id, playlistInfoDto.name,
            playlistInfoDto.description, playlistInfoDto.totalDuration,
            playlistInfoDto.tracks ? playlistInfoDto.tracks.map(mapTrackDtoToTrack) : [])
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
            playlistDto.tracks ? playlistDto.tracks.map(mapTrackDtoToTrack) : [])
    }

    function response({
        result,
        res,
        status
    }) {
        res
            .status(status)
            .type('json')
            .end(JSON.stringify(result))
    }

    return router
}