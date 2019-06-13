module.exports = function (elasticSearchService) {

    const InvalidParameterError = require('./invalid-parameter-error')
    const Playlist = require('./model/playlist-model')
    const TrackDto = require('./services/model/track-dto-model')
    const UserDto = require('./services/model/user-dto-model')
    const User = require('./model/user-model')

    async function validateLogin(user) {
        if (!user || !user.username || user.username.length === 0 || !user.password || !user.password.length === 0) {
            throw new InvalidParameterError("User cannot be empty", 400)
        }
        const userDto = UserDto.init(user.username, user.password)
        return elasticSearchService.validateLogin(userDto)
    }

    async function signInUser(user) {
        if (!user || !user.username || user.username.length === 0 || !user.password || !user.password.length === 0) {
            throw new InvalidParameterError("User cannot be empty", 400)
        }
        const userDto = UserDto.init(user.username, user.password)
        return elasticSearchService.signInUser(userDto)
    }

    async function createPlaylist(playlistDto, userDto) {
        if (!playlistDto || !playlistDto.name || playlistDto.name.length === 0) {
            throw new InvalidParameterError("Playlist name cannot be empty", 400)
        }
        if (!userDto || !userDto.playlistsId || !userDto.playlistsId.length === 0) {
            throw new InvalidParameterError("User cannot be empty", 400)
        }
        const user = User.init(userDto.username, userDto.password, userDto.playlistsId)
        const playlist = mapPlaylistToPlaylistDto(playlistDto)
        return elasticSearchService.createPlaylist(playlist, user)
    }

    async function deletePlaylist(playlistDto, userDto) {
        if (!playlistDto || !playlistDto.id || playlistDto.id.length === 0) {
            throw new InvalidParameterError("Playlist id cannot be empty", 400)
        }
        if (!userDto || !userDto.playlistsId || userDto.playlistsId.length === 0) {
            throw new InvalidParameterError("User cannot be empty", 400)
        }
        const playlist = mapPlaylistToPlaylistDto(playlistDto)
        const user = UserDto.init(userDto.username, userDto.password, userDto.playlistsId)
        return elasticSearchService.deletePlaylist(playlist, user)
    }

    async function updatePlaylist(playlistDto) {
        if (!playlistDto || !playlistDto.id || playlistDto.id.length === 0) {
            throw new InvalidParameterError("Playlist id cannot be empty", 400)
        }
        const playlist = mapPlaylistToPlaylistDto(playlistDto)
        return elasticSearchService.updatePlaylist(playlist)
    }

    async function getPlaylists(userDto) {
        if (!userDto || !userDto.playlistsId || userDto.playlistsId.length === 0) {
            throw new InvalidParameterError("User cannot be empty", 400)
        }
        const user = UserDto.init(userDto.username, userDto.password, userDto.playlistsId)
        return elasticSearchService.getPlaylists(user)
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

    function mapPlaylistToPlaylistDto(playlist) {
        return Playlist.init(playlist.id, playlist.name, playlist.description,
            playlist.tracks ? playlist.tracks.map(t => mapTrackToTrackDto(t)) : [])
    }

    function mapTrackToTrackDto(track) {
        return TrackDto.init(track.name, track.url, track.duration, track.artist)
    }


    return {
        validateLogin: validateLogin,
        signInUser: signInUser,
        createPlaylist: createPlaylist,
        deletePlaylist: deletePlaylist,
        updatePlaylist: updatePlaylist,
        getPlaylists: getPlaylists,
        getPlaylistInfo: getPlaylistInfo,
        addMusicToPlaylist: addMusicToPlaylist,
        removeMusicFromPlaylist: removeMusicFromPlaylist
    }
}