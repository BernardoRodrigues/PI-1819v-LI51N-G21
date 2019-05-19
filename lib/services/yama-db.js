module.exports = function (request) {

    const InvalidParametersError = require('./invalid-paramters-error')
    const ServerDownError = require('./server-down-error')
    const endpoints = require('./../config/endpoints')
    const Track = require('./model/track-dto-model')
    const Playlist = require('./model/playlist-dto-model')
    const PlaylistInfo = require('./model/playlist-info-dto-model')
    const Artist = require('./model/artist-dto-model')

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
        return getPlaylist(playlist.id)
            .then((result) => {
                return {
                    name: playlist.name || result.name,
                    description: playlist.description || result.description
                }
            })
            .then((body) => request
                .put(endpoints.updatePlaylistEndpoint(playlist.id), {
                    body: body,
                    json: true
                }))
            .then(() => playlist)
            .then(mapPlaylist)
            .catch(handleError)

    }


    async function getPlaylists() {
        return request
            .get(endpoints.getAllPlaylistsEndpoint(), {
                json: true
            })
            .then(mapMultiplePlaylists)
            .catch(handleError)
    }

    async function getPlaylistInfo(playlist) {
        if (!playlist || !playlist.id || playlist.id.length === 0) {
            throw new InvalidParametersError('Playlist id is required', 400)
        }
        const res = await getPlaylist(playlist)
        return request.get(endpoints.getTracksListEndpoint(playlist.id), {
                json: true,
            })
            .then()
            .then((obj) => {
                return {
                    result: res,
                    tracks: obj._source.tracks
                }
            })
            .then(mapPlaylistInfo)
            .catch(handleError)
    }

    function getPlaylist(id) {
        return request.get(endpoints.getPlaylistEndpoint(id), {
                json: true,
            })
            .then(checkResult)
            .catch(handleError)
    }

    function checkResult(result) {
        if (!result.found) {
            throw new InvalidParametersError(`Playlist with id ${playlist.id} not found`, 400)
        }
        return result
    }

    function addMusic(playlist) {
        if (!playlist || !playlist.id || playlist.id.length === 0)
            throw new InvalidParametersError('Playlist id is required', 400)
        if (!playlist.tracks || playlist.tracks.length === 0)
            throw new InvalidParametersError('Can not add empty music list is required', 400)
        const res = await getPlaylistInfo(playlist)
        const t = res.tracks.push(playlist.tracks)
        return request.put(
                endpoints.updateTracksListEndpoint(playlist.id), {
                    body: {
                        tracks: t
                    },
                    json: true
                })
            .then(() => t)
            .catch(handleError)
    }


    async function deleteMusic(playlist) {
        if (!playlist || !playlist.id || playlist.id.length === 0)
            throw new InvalidParametersError('Playlist id is required', 400)
        const res = await getPlaylistInfo(playlist)
        const song = res.tracks.find(e => e.url === playlist.tracks[0].url)
        const index = res.indexOf(song)
        const t = res.splice(index, 1)
        return request
            .put(endpoints.updateTracksListEndpoint(playlist.id), {
                body: {
                    tracks: t
                },
                json: true
            })
            .then(() => t)
            .catch(handleError)
    }

    function handleError(err) {
        if (err.statusCode >= 500) {
            throw new ServerDownError('Elastic Search is down', 500)
        }
    }

    function mapPlaylist(playlist) {
        return Playlist.init(playlist.id, playlist.name, playlist.description, [])
    }

    function mapMultiplePlaylists(result) {
        return result.hits.hits.map(mapPlaylist)
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
        return mapPlaylist({
            id: firstResult._id,
            name: firstResult.name,
            description: firstResult.description,
            tracks: secondResult.tracks
        })
    }

    function mapPlaylistCreated({
        id,
        pl
    }) {
        return mapPlaylist({
            id: id,
            name: pl.name,
            description: pl.description,
            tracks: []
        })
    }

    function mapDuration(tracks) {
        let duration = 0
        tracks.forEach(element => {
            duration += parseInt(element.duration) || 0
        });
        return duration
    }

    return {
        createPlaylist: createPlaylist,
        deletePlaylist: deletePlaylist,
        updatePlaylist: updatePlaylist,
        getPlaylists: getPlaylists,
        getPlaylistInfo: getPlaylistInfo,
        addMusicToPlaylist: addMusic,
        removeMusicFromPlaylist: deleteMusic
    }

}