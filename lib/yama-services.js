module.exports = function (lastFmService, elasticSearchService) {
    const InvalidParameterError = require('./invalid-parameter-error').default

    function getArtists(name, cb) {
        if (!name || name === null || name.length === 0) {
            throw new InvalidParameterError("Artist name cannot be empty", 400)
        }
        return lastFmService.getArtists(name, cb)
    }

    function getTopAlbums(mbid, cb) {
        if (!mbid || mbid === null || mbid.length === 0) {
            throw new InvalidParameterError("Artist mbid cannot be empty", 400)
        }
        return lastFmService.getTopAlbums(mbid, cb)
    }

    function getAlbumInfo(mbid, cb) {
        if (!mbid || mbid === null || mbid.length === 0) {
            throw new InvalidParameterError("Album mbid cannot be empty", 400)
        }
        lastFmService.getAlbumInfo(mbid, cb)
    }

    function createPlaylist(name, description, cb) {
        if (!name || name === null || name.length === 0) {
            throw new InvalidParameterError("Playlist name cannot be empty", 400)
        }
        return elasticSearchService.createPlaylist(name, description, cb)
    }

    function deletePlaylist(playlistId, cb) {
        if (!playlistId || playlistId === null || playlistId.length === 0) {
            throw new InvalidParameterError("Playlist id cannot be empty", 400)
        }
        return elasticSearchService.deletePlaylist(playlistId, cb)
    }

    function getPlaylists(cb) {
        return elasticSearchService.getPlaylists(cb)
    }

    function getPlaylistInfo(playlistId, cb) {
        if (!playlistId || playlistId === null || playlistId.length === 0) {
            cb(new InvalidParameterError("Playlist id cannot be empty", 400))
        }
        return elasticSearchService.getPlaylistInfo(playlistId, cb)
    }

    function addMusicToPlaylist(playlistId, tracks, cb) {
        if (!playlistId || playlistId === null || playlistId.length === 0) {
            throw new InvalidParameterError("Playlist id cannot be empty", 400)
        }
        if (!tracks || tracks === null || tracks.length === 0) {
            throw new InvalidParameterError("Tracks cannot be empty", 400)
        }
        return elasticSearchService.addMusicToPlaylist(playlistId, tracks, cb)
    }

    function removeMusicFromPlaylist(playlistId, tracks, cb) {
        if (!playlistId || playlistId === null || playlistId.length === 0) {
            throw new InvalidParameterError("Playlist id cannot be empty", 400)
        }
        return elasticSearchService.removeMusicFromPlaylist(playlistId, tracks, cb)
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