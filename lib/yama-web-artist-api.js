module.exports = function(router, service) {

    if(!service)
        throw new Error("Services must be injected")
    if (!router) 
        throw new Error("Router must be injected")

    router.get('/artists/search/:name', getArtists)
        .get('/artists/:mbid/albums', getTopAlbums)
        .get('/albums/:mbid', getAlbumInfo)

    function getArtists(req, resp) {
        const name = req.path.name
        const page = req.query.page
        const artist = Artist.init(name)
        return services
            .getArtists(artist, page)
            .then(mapMultipleArtists)
            .then((result) => {return {result: result, resp: resp}})
            .then(responseOk)
            .catch((err) => {
                resp.statusCode = err.statusCode
                resp.end(JSON.stringify({
                    message: err.message,
                    statusCode: err.statusCode
                }))
            })
    }

    function getTopAlbums(req, resp) {
        const mbid = req.path.mbid
        const page = req.query.page
        const artist = Artist.init(undefined, mbid)
        return services
            .getTopAlbums(artist, page)
            .then(mapMultipleAlbums)
            .then((result) => {return {result: result, resp: resp}})
            .then(responseOk)
            .catch((err) => {
                resp.statusCode = err.statusCode
                resp.end(JSON.stringify({
                    message: err.message,
                    statusCode: err.statusCode
                }))
            })
    }

    function getAlbumInfo(req, resp) {
        const mbid = req.path.mbid
        const album = Album.init(undefined, undefined, mbid)
        return services
                .getAlbumInfo(album)
                .then(mapAlbumInfoDtoToAlbumInfo)
                .then((result) => {return {result: result, resp: resp}})
                .then(responseOk)
                .catch((err) => {
                    resp.statusCode = err.statusCode
                    resp.end(JSON.stringify({
                        message: err.message,
                        statusCode: err.statusCode
                    }))
                })
    }

    function responseOk({result, resp}) {
        resp.statusCode = status
        resp.setHeader('Content-Type', 'application/json')
        resp.end(JSON.stringify(result))
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
            artistDto.images? artistDto.images.map(mapImageDtoToImage):[])
    }
    
    function mapAlbumDtoToAlbum(albumDto) {
        return Album.init(albumDto.name, albumDto.url, albumDto.mbid, 
            albumDto.images? albumDto.images.map(mapImageDtoToImage):[], mapArtistDtoToArtist(albumDto.artist))
    }

    function mapAlbumInfoDtoToAlbumInfo(albumInfoDto) {
        return AlbumInfo.init(albumInfoDto.name, albumInfoDto.mbid, albumInfoDto.artistName, albumInfoDto.url,
            albumInfoDto.images? albumInfoDto.images.map(mapImageDtoToImage):[], 
            albumInfoDto.tracks? albumInfoDto.tracks.map(mapTrackDtoToTrack):[])
    }

    return router
}