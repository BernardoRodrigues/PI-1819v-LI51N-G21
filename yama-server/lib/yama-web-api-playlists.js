module.exports = function (service, router, globalRouter) {

    if (!service)
        throw new Error("Service must be injected")
    if (!router) {
        throw new Error("Router must be injected")
    }

    const Playlist = require('./model/playlist-model')
    const PlaylistInfo = require('./model/playlist-info-model')
    const Track = require('./model/track-model')

    router.get('/', getPlaylists)
    router.post('/', createPlaylist)

    router.delete('/:playlistId', deletePlaylist)
    router.put('/:playlistId', updatePlaylist)
    router.get('/:playlistId', getPlaylistInfo)

    router.put('/:playlistId/track', addMusicToPlaylist)
    router.delete('/:playlistId/track', removeMusicFromPlaylist)

    // globalRouter.use(router)

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
                        status: err.statusCode || 500
                    }))
        } catch (err) {
            response({
                result: {
                    message: err.message,
                    statusCode: err.statusCode
                },
                resp,
                status: err.statusCode || 500
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
                        status: err.statusCode || 500
                    }))
        } catch (err) {
            response({
                result: {
                    message: err.message,
                    statusCode: err.statusCode
                },
                resp,
                status: err.statusCode || 500
            })
        }
    }

    async function updatePlaylist(req, resp) {
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
                        status: err.statusCode || 500
                    }))
        } catch (err) {
            response({
                result: {
                    message: err.message,
                    statusCode: err.statusCode
                },
                resp,
                status: err.statusCode || 500
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
                        status: err.statusCode || 500
                    }))
        } catch (err) {
            response({
                result: {
                    message: err.message,
                    statusCode: err.statusCode
                },
                resp,
                status: err.statusCode || 500
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
                        status: err.statusCode || 500
                    }))
        } catch (err) {
            response({
                result: {
                    message: err.message,
                    statusCode: err.statusCode
                },
                resp,
                status: err.statusCode || 500
            })
        }
    }

    function addMusicToPlaylist(req, resp) {
        const playlistId = req.params.playlistId
        const track = req.body.track
        try {
            return service
                .addMusicToPlaylist(
                    Playlist.init(playlistId, undefined, undefined, [Track.init(track.name, track.url, track.duration, track.artist)]))
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
                        status: err.statusCode || 500
                    }))
        } catch (err) {
            response({
                result: {
                    message: err.message,
                    statusCode: err.statusCode
                },
                resp,
                status: err.statusCode || 500
            })
        }
    }

    function removeMusicFromPlaylist(req, resp) {
        const playlistId = req.params.playlistId
        const trackUrl = req.body.trackUrl
        try {
            return service
                .removeMusicFromPlaylist(
                    Playlist.init(playlistId, undefined, undefined, [Track.init(null, trackUrl, null, null, null)]))
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
                        status: err.statusCode || 500
                    }))
        } catch (err) {
            response({
                result: {
                    message: err.message,
                    statusCode: err.statusCode
                },
                resp,
                status: err.statusCode || 500
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