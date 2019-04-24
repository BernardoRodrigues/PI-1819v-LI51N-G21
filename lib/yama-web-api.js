module.exports = function(services) {

    const Artist = require('./model/artist-model')
    const Image = require('./model/image-model')
    const Album = require('./model/album-model')
    const AlbumInfo = require('./model/album-info-model')

    const Playlist = require('./model/playlist-model')
    const PlaylistInfo = require('./model/playlist-info-model')
    const Track = require('./model/track-model')

    function getArtists(req, resp) {
        const url = req.url.split("/")
        const name = url[url.length-1]
        const queryString = req.url.split("?")[1]
        try {
            return services.getArtists(Artist.init(name), 
            (result) => okResponse(result.map(mapArtistDtoToArtist), resp), getPage(queryString))
        } catch(err) {
            handleError(err, resp)
        }
    }

    function mapImageDtoToImage(imageDto) {
        return Image.init(imageDto.url)
    }

    function mapArtistDtoToArtist(artistDto) {
        return Artist.init(artistDto.name, artistDto.mbid, artistDto.url, artistDto.images.map(mapImageDtoToImage))
    }

    function getPage(queryString) {
        return queryString 
        && queryString.length > 0 
        && queryString.includes("page")? parseInt( queryString.split("=")[1]) : undefined
    }

    function getTopAlbums(req, resp) {
        const url = req.url.split("/")
        const mbid = url[url.length - 2]
        const queryString = req.url.split("?")[1]
        try {
            return services.getTopAlbums(Artist.init(undefined, mbid), 
            (result) => okResponse(result.map(mapAlbumDtoToAlbum), resp), getPage(queryString))
        } catch(err) {
            handleError(err, resp)
        }
    }

    function mapAlbumDtoToAlbum(albumDto) {
        return Album.init(albumDto.name, albumDto.url, albumDto.mbid, 
            albumDto.images? albumDto.images.map(mapImageDtoToImage):[], mapArtistDtoToArtist(albumDto.artist))
    }

    function getAlbumInfo(req, resp) {
        const url = req.url.split("/")
        const mbid = url[url.length - 1]
        try {
            services.getAlbumInfo(Album.init(undefined, undefined, mbid), 
            (result) => okResponse(mapAlbumInfoDtoToAlbumInfo(result), resp))
        } catch(err) { handleError(err, resp) }
    }

    function mapAlbumInfoDtoToAlbumInfo(albumInfoDto) {
        return AlbumInfo.init(albumInfoDto.name, albumInfoDto.mbid, albumInfoDto.artistName, albumInfoDto.url,
            albumInfoDto.images? albumInfoDto.images.map(mapImageDtoToImage):[], 
            albumInfoDto.tracks? albumInfoDto.tracks.map(mapTrackDtoToTrack):[])
    }

    function mapTrackDtoToTrack(track) {
        return Track.init(track.name, track.url, track.duration, track.artist)
    }

    function getRequestBody(req) {
        let body = '';
        req.on('data', (chunk) => body += chunk.toString())
    }

    function createPlaylist(req, resp) {
            let requestBody = getRequestBody(req)
            req.on('end', () => {
                const {name, description} = JSON.parse(requestBody)
                try {
                    services.createPlaylist(Playlist.init(undefined, name, description), 
                    (result) => okResponse(mapPlaylistDtoToPlaylist(result), resp))
                } catch(error) {
                    handleError(err, resp)
                }
            })
    }

    function mapPlaylistDtoToPlaylist(playlistDto) {
        return Playlist.init(playlistDto.id, playlistDto.name, playlistDto.description, 
            playlistDto.tracks? playlistDto.tracks.map(mapTrackDtoToTrack):[])
    }

    function deletePlaylist(req, resp) {
        const url = req.url.split("/")
        const playlistId = url[url.length - 1]
        try {
            return services.deletePlaylist(Playlist.init(playlistId)
            , (result) => okResponse(mapPlaylistDtoToPlaylist(result), resp))
        } catch(err) {
            handleError(err, resp)
        }
    }

    function updatePlaylist(req, resp) {
        const url = req.url.split("/")
        const playlistId = url[url.length - 1]
        try {
            let requestBody = getRequestBody(req)
            return req.on('end', () => {
                const {name, description} = JSON.parse(requestBody)
                services.updatePlaylist(Playlist.init(playlistId, name, description), 
                (result) => okResponse(mapPlaylistDtoToPlaylist(result), resp)) 
            }) 
        } catch(err) {
            handleError(err, resp)
        }
    }

    function getPlaylists(resp) {
        try {
            return services.getPlaylists((result) => okResponse(result.map(mapPlaylistDtoToPlaylist), resp))
        } catch(err) {
            handleError(err, resp)
        }
    }

    function getPlaylistInfo(req, resp) {
        const url = req.url.split("/")
        const playlistId = url[url.length - 1]
        try {
            return services.getPlaylistInfo(Playlist.init(playlistId)
            , (result) => okResponse(mapPlaylistInfoDtoToPlaylistInfo(result), resp))
        } catch(err) {
            handleError(err, resp)
        }
    }

    function mapPlaylistInfoDtoToPlaylistInfo(playlistInfoDto) {
        return PlaylistInfo.init(playlistInfoDto.id, playlistInfoDto.name,
            playlistInfoDto.description, playlistInfoDto.totalDuration, 
            playlistInfoDto.tracks? playlistInfoDto.tracks.map(mapTrackDtoToTrack):[])
    }

    function addMusicToPlaylist(req, resp) {
        const url = req.url.split("/")
        const playlistId = url[url.length - 2]
        let requestBody = getRequestBody(req)
        req.on('end', () => {
            const tracks = JSON.parse(data)
            try {
                return services.addMusicToPlaylist(
                    Playlist.init(playlistId, undefined, undefined, 
                        tracks.map(t => Track.init(t.name, t.url, t.duration, t.artist))), 
                    (result) => okResponse(result.map(mapTrackDtoToTrack), req))
            } catch(error) {
                handleError(err, req)
            }
        })
    }

    function removeMusicFromPlaylist(req, resp) {
        const url = req.url.split("/")
        const playlistId = url[url.length - 2]
        let requestBody = getRequestBody(req)
        req.on('end', () => {
            const tracks = JSON.parse(requestBody)
            try {
                services.removeMusicFromPlaylist(Playlist.init(playlistId, undefined, undefined, 
                    tracks.map(t => Track.init(t.name, t.url, t.duration, t.artist))), 
                    (result) => 
                    okResponse(result.map(mapTrackDtoToTrack), req))
            } catch(error) {
                handleError(err, req)
            }
        })
    }

    function handleError(err, resp) {
        resp.statusCode = err.statusCode
        resp.end(JSON.stringify({
            message: err.message,
            statusCode: err.statusCode
        }))
    }

    
    function notFound(req, resp) {
        resp.statusCode = 404
        resp.end(JSON.stringify({
            message: "Method or Path do not exist",
            statusCode: 404
        }))
    }

    function okResponse(result, resp) {
        resp.statusCode = 200
        resp.setHeader('Content-Type', 'application/json')
        resp.end(JSON.stringify(result))
    }

    return {
        getArtists: getArtists,
        getTopAlbums: getTopAlbums,
        getAlbumInfo: getAlbumInfo,
        createPlaylist: createPlaylist,
        deletePlaylist: deletePlaylist,
        updatePlaylist: updatePlaylist,
        getPlaylists: getPlaylists,
        getPlaylistInfo: getPlaylistInfo,
        addMusicToPlaylist: addMusicToPlaylist,
        removeMusicFromPlaylist: removeMusicFromPlaylist,
        notFound: notFound
    }
}