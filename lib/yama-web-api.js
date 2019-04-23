'use strict'
module.exports = function(services) {
    if(!services)
        services = require('./services/lastfm-data')
    //TODO add model classes

    function getArtists(req, resp) {
        const url = req.url.split("/")
        const name = url[url.length-1]
        try {
            services.getArtists(name, (result) => okResponse(result, resp))
        } catch(err) {
            handleError(err, resp)
        }
    }

    function getTopAlbums(req, resp) {
        const url = req.url.split("/")
        const mbid = url[url.length - 2]
        try {
            return services.getTopAlbums(mbid, (result) => okResponse(result, resp))
        } catch(err) {
            handleError(err, resp)
        }
    }

    function getAlbumInfo(req, resp) {
        const url = req.url.split("/")
        const mbid = url[url.length - 1]
        try {
            services.getAlbumInfo(mbid, (result) => okResponse(result, resp))
        } catch(err) { 
            handleError(err, resp) 
        }
    }

    function createPlaylist(req, resp) {
        req.on('data', (data) => {
            const {name, description} = JSON.parse(data)
            try {
                services.createPlaylist(name, description, (result) => okResponse(result, resp))
            } catch(error) {
                handleError(err, resp)
            }
        })
    }

    function deletePlaylist(req, resp) {
        const url = req.url.split("/")
        const playlistId = url[url.length - 1]
        try {
            return services.deletePlaylist(playlistId, (_err, result) => {})
        } catch(err) {
            handleError(err, resp)
        }
    }

    function getPlaylists(req, resp) {
        try {
            return services.getPlaylists((_err, result) => {})
        } catch(err) {
            handleError(err, resp)
        }
    }

    function getPlaylistInfo(req, resp) {
        const url = req.url.split("/")
        const playlistId = url[url.length - 1]
        try {
            return services.getPlaylistInfo(playlistId, (_err, result) => {})
        } catch(err) {
            handleError(err, resp)
        }
    }

    function addMusicToPlaylist(req, resp) {
        const url = req.url.split("/")
        const playlistId = url[url.length - 2]
        req.on('data', (data) => {
            const tracks = JSON.parse(data)
            try {
                services.addMusicToPlaylist(playlistId, tracks, (result) => okResponse(result, resp))
            } catch(error) {
                handleError(err, resp)
            }
        })
    }

    function removeMusicFromPlaylist(req, resp) {
        const url = req.url.split("/")
        const playlistId = url[url.length - 2]
        req.on('data', (data) => {
            const tracks = JSON.parse(data)
            try {
                services.removeMusicFromPlaylist(playlistId, tracks, (result) => okResponse(result, resp))
            } catch(error) {
                handleError(err, resp)
            }
        })
    }

    function handleError(err, resp) {
        resp.statusCode = err.status
        resp.end = {
            message: err.message,
            statusCode: err.status
        }
    }

    function okResponse(result, resp) {
        resp.statusCode = 200
        resp.end(JSON.stringify(result))
    }

    return {
        getArtists: getArtists,
        getTopAlbums: getTopAlbums,
        getAlbumInfo: getAlbumInfo,
        createPlaylist: createPlaylist,
        deletePlaylist: deletePlaylist,
        getPlaylists: getPlaylists,
        getPlaylistInfo: getPlaylistInfo,
        addMusicToPlaylist: addMusicToPlaylist,
        removeMusicFromPlaylist: removeMusicFromPlaylist
    }
}()