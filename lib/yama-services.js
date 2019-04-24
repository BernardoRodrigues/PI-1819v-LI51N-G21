module.exports = function (lastFmService, elasticSearchService) {
    const InvalidParameterError = require('./invalid-parameter-error').default
    const ArtistDto = require('./services/model/artist-dto-model')
    const ImageDto = require('./services/model/image-dto-model')
    const AlbumDto = require('./services/model/album-dto-model')
    const Playlist = require('./model/playlist-model')
    const TrackDto = require('./services/model/track-dto-model')

    function getArtists(artist, cb, page = 1) {
        if (!artist || !artist.name || artist.name.length === 0) {
            throw new InvalidParameterError("Artist name cannot be empty")
        }
        return lastFmService.getArtists(mapArtistToArtistDto(artist), cb, page)
    }

    function mapArtistToArtistDto(artist) {
        return ArtistDto.init(artist.name, artist.mbid, artist.url, 
            artist.images? artist.images.map(i => mapImageToImageDto(i.url)):[])
    }

    function mapImageToImageDto(image) {
        return ImageDto.init(image.url)
    }

    function getTopAlbums(artist, cb, page = 1) {
        if (!artist || !artist.mbid || artist.mbid.length === 0) {
            throw new InvalidParameterError("Artist mbid cannot be empty")
        }
        return lastFmService.getTopAlbums(mapArtistToArtistDto(artist), cb, page)
    }

    function getAlbumInfo(album, cb) {
        if (!album || !album.mbid || album.mbid.length === 0) {
            throw new InvalidParameterError("Album mbid cannot be empty")
        }
        lastFmService.getAlbumInfo(mapAlbumToAlbumDto(album), cb)
    }

    function mapAlbumToAlbumDto(album) {
        return AlbumDto.init(album.name, album.url, album.mbid, 
            album.images? album.images.map(i => mapImageToImageDto(i)):[], album.artist? mapArtistToArtistDto(album.artist):album.artist)
    }

    function createPlaylist(playlist, cb) {
        if (!playlist || !playlist.name || playlist.name.length === 0) {
            throw new InvalidParameterError("Playlist name cannot be empty")
        }
        return elasticSearchService.createPlaylist(mapPlaylistToPlaylistDto(playlist), cb)
    }

    function mapPlaylistToPlaylistDto(playlist) {
        return Playlist.init(playlist.id, playlist.name, playlist.description,
            playlist.tracks? playlist.tracks.map(t => mapTrackToTrackDto(t)):[])
    }

    function mapTrackToTrackDto(track) {
        return TrackDto.init(track.name, track.url, track.duration, track.artist)
    }

    function deletePlaylist(playlist, cb) {
        if (!playlist || !playlist.id || playlist.id.length === 0) {
            throw new InvalidParameterError("Playlist id cannot be empty")
        }
        return elasticSearchService.deletePlaylist(mapPlaylistToPlaylistDto(playlist), cb)
    }

    function updatePlaylist(playlist, cb) {
        if (!playlist || !playlist.id || playlist.id.length === 0) {
            throw new InvalidParameterError("Playlist id cannot be empty")
        }
        return elasticSearchService.updatePlaylist(mapPlaylistToPlaylistDto(playlist), cb)
    }

    function getPlaylists(cb) {
        return elasticSearchService.getPlaylists(cb)
    }

    function getPlaylistInfo(playlist, cb) {
        if (!playlist || !playlist.id || playlist.id.length === 0) {
            cb(new InvalidParameterError("Playlist id cannot be empty"))
        }
        return elasticSearchService.getPlaylistInfo(mapPlaylistToPlaylistDto(playlist), cb)
    }

    function addMusicToPlaylist(playlist, cb) {
        if (!playlist || !playlist.id || playlist.id.length === 0) {
            throw new InvalidParameterError("Playlist id cannot be empty")
        }
        if (!playlist.tracks || playlist.tracks.length === 0) {
            throw new InvalidParameterError("Tracks cannot be empty")
        }
        return elasticSearchService.addMusicToPlaylist(mapPlaylistToPlaylistDto(playlist), cb)
    }

    function removeMusicFromPlaylist(playlist, cb) {
        if (!playlist || !playlist.id || playlist.id.length === 0) {
            throw new InvalidParameterError("Playlist id cannot be empty")
        }
        return elasticSearchService.removeMusicFromPlaylist(mapPlaylistToPlaylistDto(playlist), cb)
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
        removeMusicFromPlaylist: removeMusicFromPlaylist
    }
}