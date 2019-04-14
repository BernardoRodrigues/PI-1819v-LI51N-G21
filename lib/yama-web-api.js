const services = require('./yama-services')

module.exports = function() {

    function getArtists(req, resp) {
        const url = req.url.split("/")
        const name = url[url.length-1]
        if (!name) {
            resp.statusCode = 400
            resp.end = "Bad Request"
        }
        return services.getArtists(name, (result) => {
            resp.statusCode = 200
            resp.end(result)
        })
    }

    function getTopAlbums(req, resp) {
        const url = req.url.split("/")
        const mbid = url[url.length - 1]
        if (!name) {
            resp.statusCode = 400
            resp.end = "Bad Request"
        }
        return services.getTopAlbums(mbid, (result) => {
            resp.statusCode = 200
            resp.end = result
        })
    }

    return {
        getArtists: getArtists,
        getTopAlbums: getTopAlbums
    }
}()