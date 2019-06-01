module.exports = function (service, router) {

    if (!service)
        throw new Error("Service must be injected")
    if (!router)
        throw new Error("Router must be injected")

    const Artist = require('./model/artist-model')
    const Album = require('./model/album-model')
    const AlbumInfo = require('./model/album-info-model')
    const Track = require('./model/track-model')
    const Image = require('./model/image-model')

    router.get('/search/:name', getArtists)
    router.get('/:mbid/albums', getTopAlbums)
    router.get('/album/:mbid', getAlbumInfo)

    function getArtists(req, resp) {
        const name = req.params.name
        const page = req.query.page
        const artist = Artist.init(name)
        return service
            .getArtists(artist, page)
            .then(mapMultipleArtists)
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
    }

    function getTopAlbums(req, resp) {
        const mbid = req.params.mbid
        const page = req.query.page
        const artist = Artist.init(undefined, mbid)
        try {
            return service
                .getTopAlbums(artist, page)
                .then(mapMultipleAlbums)
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

    function getAlbumInfo(req, resp) {
        const mbid = req.params.mbid
        const album = Album.init(undefined, undefined, mbid)
        return service
            .getAlbumInfo(album)
            .then(mapAlbumInfoDtoToAlbumInfo)
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

    function mapMultipleArtists(result) {
        return result.map(mapArtistDtoToArtist)
    }

    function mapMultipleAlbums(result) {
        return result.map(mapAlbumDtoToAlbum)
    }

    function mapImageDtoToImage(imageDto) {
        return Image.init(imageDto.url)
    }

    function mapArtistDtoToArtist(artistDto) {
        return Artist.init(artistDto.name, artistDto.mbid, artistDto.url,
            artistDto.images ? artistDto.images.map(mapImageDtoToImage) : [])
    }

    function mapAlbumDtoToAlbum(albumDto) {
        return Album.init(albumDto.name, albumDto.url, albumDto.mbid,
            albumDto.images ? albumDto.images.map(mapImageDtoToImage) : [], mapArtistDtoToArtist(albumDto.artist))
    }

    function mapAlbumInfoDtoToAlbumInfo(albumInfoDto) {
        return AlbumInfo.init(albumInfoDto.name, albumInfoDto.mbid, albumInfoDto.artistName, albumInfoDto.url,
            albumInfoDto.images ? albumInfoDto.images.map(mapImageDtoToImage) : [],
            albumInfoDto.tracks ? albumInfoDto.tracks.map(mapTrackDtoToTrack) : [])
    }

    function mapTrackDtoToTrack(track) {
        return Track.init(track.name, track.url, track.duration, track.artist)
    }

    return router
}