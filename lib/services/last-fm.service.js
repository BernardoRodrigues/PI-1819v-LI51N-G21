module.exports = function() {

    const request = require('request')
    const apiKeyConfig = require('./../last-fm-api-key-config.json')
    const urlConfig = require('./../last-fm-url-config.json')
    const apiKeyQueryString = `api_key=${apiKeyConfig}`

    this.getArtists = function(name, page = 1, cb) {
        return request
            .get(`${urlConfig.baseUrl}/?method=artist.search&artist=${formatWhiteSpace(name)}&page=${page}&${apiKeyQueryString}&format=json`)
            .on('response', response => cb(null, {artists: JSON.parse(response).results.artistMatches}))
            .on('err', err => errorHandler(err, cb))
    }
    
    this.getTopAlbums = function(mbid, page = 1, cb) {
        return request
            .get(`${urlConfig.baseUrl}/?method=artist.gettopalbum&page=${page}&mbid=${mbid}&${apiKeyQueryString}&format=json`)
            .on('response', response => cb(null, {albums: JSON.parse(response).topalbums.album}))
            .on('error', err => errorHandler(err, cb))
    }

    this.getAlbumInfo = function(artistName, albumName, mbid, page = 1, cb) {
        const artistId = mbid? `mbid=${mbid}`: `artist=${formatWhiteSpace(artistName)}&album=${formatWhiteSpace(albumName)}`
        return request
            .get(`${urlConfig.baseUrl}/?method=album.getinfo&page=${page}&${artistId}&${apiKeyQueryString}&format=json`)
            .on('response', response => {
                const result = JSON.parse(response)
                delete result.listeners
                delete result.playcount
                cb(null, {album: result.album, tracks: result.tracks.track})
            })
            .on('error', err => errorHandler(err, cb))
    }

    function formatWhiteSpace(value) {
        return value.replace(/ /gi, '+')
    }

    function errorHandler(err, cb) {
        console.error(err)
        cb(err)
    }
}