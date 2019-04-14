const lastFmService = require('./services/lastfm-data')
const elasticSearchService = require('./services/yama-db')

module.exports = function () {
    function getArtists(name, cb) {
        return lastFmService.getArtists(name, cb)
    }

    function getTopAlbums(mbid, cb) {
        return lastFmService.getTopAlbums(mbid, cb)
    }

    function getAlbumInfo(artistName, albumName, mbid, cb) {
        return lastFmService.getAlbumInfo(artistName, albumName, mbid, cb)
    }

    return {
        getArtists: getArtists,
        getTopAlbums: getTopAlbums,
        getAlbumInfo: getAlbumInfo
    }
}()