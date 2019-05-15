module.exports = function (elasticSearchService) {
    
    const InvalidParameterError = require('./invalid-parameter-error')
    const Playlist = require('./model/playlist-model')
    const TrackDto = require('./services/model/track-dto-model')

    async function createPlaylist(playlistDto) {
        if (!playlistDtoDto || !playlistDtoDto.name || playlistDto.name.length === 0) {
            throw new InvalidParameterError("Playlist name cannot be empty", 400)
        }
        const playlist = mapPlaylistToPlaylistDto(playlistDto)
        return elasticSearchService.createPlaylist(playlist)
    }

    async function deletePlaylist(playlistDto) {
        if (!playlistDto || !playlistDto.id || playlistDto.id.length === 0) {
            throw new InvalidParameterError("Playlist id cannot be empty", 400)
        }
        const playlist = mapPlaylistToPlaylistDto(playlistDto)
        return elasticSearchService.deletePlaylist(playlist)
    }

    async function updatePlaylist(playlistDto) {
        if (!playlistDto || !playlistDto.id || playlistDto.id.length === 0) {
            throw new InvalidParameterError("Playlist id cannot be empty", 400)
        }
        const playlist = mapPlaylistToPlaylistDto(playlistDto)
        return elasticSearchService.updatePlaylist(playlist)
    }

    async function getPlaylists() {
        return elasticSearchService.getPlaylists()
    }

    async function getPlaylistInfo(playlistDto) {
        if (!playlistDto || !playlistDto.id || playlistDto.id.length === 0) {
            throw new InvalidParameterError("Playlist id cannot be empty", 400)
        }
        const playlist = mapPlaylistToPlaylistDto(playlistDto)
        return elasticSearchService.getPlaylistInfo(playlist)
    }

    async function addMusicToPlaylist(playlistDto) {
        if (!playlistDto || !playlistDto.id || playlistDto.id.length === 0) {
            throw new InvalidParameterError("Playlist id cannot be empty", 400)
        }
        if (!playlistDto.tracks || playlistDto.tracks.length === 0) {
            throw new InvalidParameterError("Tracks cannot be empty", 400)
        }
        const playlist = mapPlaylistToPlaylistDto(playlistDto)
        return elasticSearchService.addMusicToPlaylist(playlist)
    }

    async function removeMusicFromPlaylist(playlistDto) {
        if (!playlistDto || !playlistDto.id || playlistDto.id.length === 0) {
            throw new InvalidParameterError("Playlist id cannot be empty", 400)
        }
        const playlist = mapPlaylistToPlaylistDto(playlistDto)
        return elasticSearchService.removeMusicFromPlaylist(playlist)
    }

    // Mappers

    function mapPlaylistToPlaylistDto(playlistDto) {
        return Playlist.init(playlist.id, playlist.name, playlist.description,
            playlist.tracks? playlist.tracks.map(t => mapTrackToTrackDto(t)):[])
    }

    function mapTrackToTrackDto(track) {
        return TrackDto.init(track.name, track.url, track.duration, track.artist)
    }


    return {
        createPlaylist: createPlaylist,
        deletePlaylist: deletePlaylist,
        updatePlaylist: updatePlaylist,
        getPlaylists: getPlaylists,
        getPlaylistInfo: getPlaylistInfo,
        addMusicToPlaylist: addMusicToPlaylist,
        removeMusicFromPlaylist: removeMusicFromPlaylist
    }
}