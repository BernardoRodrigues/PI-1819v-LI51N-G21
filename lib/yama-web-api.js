module.exports = function(services) {

    function getArtists(req, resp) {
        const url = req.path.split("/")
        const name = url[url.length-1]
        badRequest(() => !name, resp)
        return services.getArtists(name, (result) => okResponse(result, resp))
    }

    function getTopAlbums(req, resp) {
        const url = req.path.split("/")
        const mbid = url[url.length - 2]
        badRequest(() => !mbid, resp)
        return services.getTopAlbums(mbid, (result) => okResponse(result, resp))
    }

    function getAlbumInfo(req, resp) {
        const url = req.path.split("/")
        const mbid = url[url.length - 1]
        badRequest(() => !name, resp)
        return services.getAlbumInfo(mbid, (result) => okResponse(result, resp))
    }

    function createPlaylist(req, resp) {
        req.on('data', (data) => {
            const {name, description} = JSON.parse(data)
            badRequest(() => !name && !description, resp)
            return services.createPlaylist(name, description, (result) => okResponse(result, resp))
        })
    }

    function okResponse(result, resp) {
        resp.statusCode = 200
        resp.end = result
    }

    function badRequest(predicate, resp) {
        if (predicate()) {
            resp.statusCode = 400
            resp.end = {message: ""}
        }
    }

    return {
        getArtists: getArtists,
        getTopAlbums: getTopAlbums,
        getAlbumInfo: getAlbumInfo,
        createPlaylist: createPlaylist
    }
}