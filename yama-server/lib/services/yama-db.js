module.exports = function (request) {

    const InvalidParametersError = require('./invalid-paramters-error')
    const ServerDownError = require('./server-down-error')
    const endpoints = require('./../config/endpoints')
    const Track = require('./model/track-dto-model')
    const Playlist = require('./model/playlist-dto-model')
    const PlaylistInfo = require('./model/playlist-info-dto-model')
    const Artist = require('./model/artist-dto-model')
    const User = require('./model/user-dto-model')
    const elasticSearchConfig = require('./../config/elastic-search-config.json')
    let userListId = getUsersListId()

    // request.post(
    //     endpoints.accessUsersEndpoint(),
    //     {
    //         body: {users: []},
    //         json: true
    //     }
    //     ).catch(err => {
    //         if (err.status && err.status >= 500) {
    //             throw new ServerDownError("Elastic Search hasn't been initiliazed", 500);
    //         }
    //     })


    function getUsersListId() {
        return request.get(
                endpoints.searchUsersEndpoint()
            )
            .then(mapUsersListId)
            .then(id => id)
            .catch(handleError)
    }

    function mapUsersListId(result) {
        return result.hits.hits._id
    }

    async function validateUser(user) {
        if (!user || !user.username || user.username.length === 0 || !user.password || user.password.length === 0) {
            throw new InvalidParametersError('User cannot be empty', 400)
        }
        request.get(
                endpoints.getUsersList(userListId), {
                    json: true
                }
            )
            .then(mapUsersList)
            .then(users => checkUserCredentials(users, (u) => u.username === user.username))
            .catch(handleError)

    }

    async function validateLogin(user) {
        if (!user || !user.username || user.username.length === 0 || !user.password || user.password.length === 0) {
            throw new InvalidParametersError('User cannot be empty', 400)
        }
        request.get(
                endpoints.getUsersList(userListId), {
                    json: true
                }
            )
            .then(mapUsersList)
            .then(users => 
                checkUserCredentials(users, (u) => u.username === user.username && u.password === user.password))
            .catch(handleError)
    }

    async function signInUser(user) {
        if (!user || !user.username || user.username.length === 0 || !user.password || user.password.length === 0) {
            throw new InvalidParametersError('User cannot be empty', 400)
        }
        const result = await validateUser(user)
        if (result) {
            throw new InvalidParametersError("User already exists", 400)
        }
        const playlistsId = await request.post(
            endpoints.createPlaylistEndpoint(),
            {
                body: {playlists: []},
                json: true
            }
        )
        .then(res => res._id)
        .catch(handleError)
        const script = elasticSearchConfig.addUserScript
        script.params.user['username'] = user.username
        script.params.user['password'] = user.password
        script.params.user['playlistsId'] = playlistsId
        return request.post(
            endpoints.updateUsersEndpoint(userListId),
            {
                body: script,
                json: true
            }
        )
        .then(_ => user.playlistsId = playlistsId)
        .then(_ => user)
        .catch(handleError)
    }

    function checkUserCredentials(users, predicate) {
        const result = users.find(predicate)
        return result ? true : false
    }


    function mapUsersList(result) {
        return result._source.users.map(u => User.init(u.username, u.password, u.playlistsListId))
    }

    async function createPlaylist(playlist) {
        if (!playlist || !playlist.name || playlist.name.length === 0)
            throw new InvalidParametersError('Playlist name is required', 400)
        const body = {
            name: playlist.name,
            description: playlist.description
        }
        const result = await request
            .post(endpoints.createPlaylistEndpoint(), {
                body: body,
                json: true,

            })
            .catch(handleError)
        const tracks = {
            tracks: []
        };
        return request
            .put(endpoints.createTracksListEndpoint(result._id), {
                body: tracks,
                json: true,

            })
            .then(() => {
                return {
                    id: result._id,
                    pl: playlist
                }
            })
            .then(mapPlaylistCreated)
            .catch(handleError)
    }

    async function deletePlaylist(playlist) {
        if (!playlist || !playlist.id || playlist.id.length === 0)
            throw new InvalidParametersError('Playlist id is required', 400)
        const result = await request.delete(endpoints.deleteTracksListEndpoint(playlist.id), {
                json: true,

            })
            .catch(handleError)
        return request.delete(endpoints.deletePlaylistEndpoint(playlist.id), {
                json: true,

            })
            .then((obj) => {
                return {
                    firstResult: result,
                    secondResult: obj
                }
            })
            .then(mapDeletePlaylistResponse)
            .catch(handleError)
    }

    async function updatePlaylist(playlist) {
        if (!playlist || !playlist.id || playlist.id.length === 0)
            throw new InvalidParametersError('Playlist id is required', 400)
        const body = {
            name: playlist.name,
            description: playlist.description
        }
        return request
            .put(endpoints.updatePlaylistEndpoint(playlist.id), {
                body: body,
                json: true,

            })
            .then(() => playlist)
            .then(mapPlaylistUpdateResponse)
            .catch(handleError)
    }

    async function getPlaylists() {
        return request
            .get(endpoints.getAllPlaylistsEndpoint(), {
                json: true,

            })
            .then(mapMultiplePlaylists)
            .catch(handleError)
    }

    async function getPlaylistInfo(playlist) {
        if (!playlist || !playlist.id || playlist.id.length === 0) {
            throw new InvalidParametersError('Playlist id is required', 400)
        }
        const res = await request.get(endpoints.getPlaylistEndpoint(playlist.id), {
                json: true,
            })
            .catch(handleError)
        return request.get(endpoints.getTracksListEndpoint(playlist.id), {
                json: true,
            })
            .then((obj) => {
                return {
                    result: res,
                    tracks: obj._source.tracks
                }
            })
            .then(mapPlaylistInfo)
            .catch(handleError)
    }


    async function getPlaylist(id) {
        return await request.get(endpoints.getPlaylistEndpoint(id), {
                json: true,
            })
            .then(checkResult)
            .then(mapPlaylist)
            .catch(handleError)
    }

    function checkResult(result) {
        if (!result.found) {
            throw new InvalidParametersError(`Playlist with id ${playlist.id} not found`, 400)
        }
        return result
    }

    async function addMusic(playlist) {
        if (!playlist || !playlist.id || playlist.id.length === 0)
            throw new InvalidParametersError('Playlist id is required', 400)
        if (!playlist.tracks || playlist.tracks.length === 0 || )
            throw new InvalidParametersError('Can not add empty music list is required', 400)
        const script = elasticSearchConfig.addMusicScript
        script.params.track = playlist.tracks[0]
        return request.post(
                endpoints.addOrRemoveMusicEndpoint(playlist.id), {
                    body: {
                        script
                    },
                    json: true
                })
            .then(() => {
                return playlist.tracks
                /*return {
                    tracks: playlist.tracks
                }*/
            })
            .catch(handleError)
    }

    async function deleteMusic(playlist) {
        if (!playlist || !playlist.id || playlist.id.length === 0)
            throw new InvalidParametersError('Playlist id is required', 400)
        if (!playlist.tracks || playlist.tracks.length === 0 || !playlist.tracks[0].url || playlist.tracks[0].url.length === 0) {
            throw new InvalidParametersError('A track url is required', 400)
        }
        const script = elasticSearchConfig.removeMusicScript
        script.params['trackUrl'] = playlist.tracks[0].url
        return request
            .post(endpoints.addOrRemoveMusicEndpoint(playlist.id), {
                body: script,
                json: true
            })
            .then(() => {
                return {
                    tracks: playlist.tracks
                }
            })
            .catch(handleError)
    }

    function handleError(err) {
        if (err.status && err.status === 400) {
            throw new InvalidParametersError("Invalid parameters", 400)
        }
        if (err.status && err.status >= 500) {
            throw new ServerDownError("Elastic Search hasn't been initiliazed", 500);
        }
    }


    function mapPlaylist(playlist) {
        return Playlist.init(playlist.id, playlist.name, playlist.description, playlist.tracks || [])
    }

    function mapMultiplePlaylists(result) {
        return result.hits.hits.map((p) => mapPlaylist({
            id: p._id,
            name: p._source.name,
            description: p._source.description,
            tracks: p._source.tracks
        }))
    }

    function mapPlaylistUpdateResponse(playlist) {
        return Playlist.init(playlist.id, playlist.name, playlist.description, [])
    }

    function mapMultiplePlaylists(result) {
        return result.hits.hits.map(p => Playlist.init(p._id, p._source.name, p._source.description, []))
    }

    function mapPlaylistInfo({
        result,
        tracks
    }) {
        return PlaylistInfo.init(result._id,
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

    function mapDeletePlaylistResponse({
        firstResult,
        secondResult
    }) {
        return Playlist.init(firstResult._id, firstResult.name, firstResult.description, secondResult.tracks)
    }

    function mapPlaylistCreated({
        id,
        pl
    }) {
        return Playlist.init(id, pl.name, pl.description, [])
    }

    function mapDuration(tracks) {
        let duration = 0
        tracks.forEach(element => {
            duration += parseInt(element.duration) || 0
        });
        return duration
    }

    return {
        validateLogin: validateLogin,
        signInUser: signInUser,
        createPlaylist: createPlaylist,
        deletePlaylist: deletePlaylist,
        updatePlaylist: updatePlaylist,
        getPlaylists: getPlaylists,
        getPlaylistInfo: getPlaylistInfo,
        addMusicToPlaylist: addMusic,
        removeMusicFromPlaylist: deleteMusic
    }

}