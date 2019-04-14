module.exports = function() {

    const request = require('request')
    const apiKeyConfig = require('./../config/last-fm-api-key-config.json')
    const urlConfig = require('./../config/last-fm-url-config.json')
    const apiKeyQueryString = `api_key=${apiKeyConfig.apiKey}`

    function getArtists(name, cb, page = 1) {
        return request(
            `${urlConfig.baseUrl}/?method=artist.search&artist=${formatWhiteSpace(name)}&page=${page}&${apiKeyQueryString}&format=json`,
            (err, _res, body) => handleResponse(err, mapArtists(body), cb))
    }

    function handleResponse(err, body, cb) {
        if (err) throw err
        cb(body)
    }

    function getAlbumInfo(artistName, albumName, mbid, cb, page = 1) {
        const artistId = mbid? `mbid=${mbid}`:`artist=${formatWhiteSpace(artistName)}&album=${formatWhiteSpace(albumName)}`
        return request(
            `${urlConfig.baseUrl}/?method=album.getinfo&page=${page}&${artistId}&${apiKeyQueryString}&format=json`,
            (err, _res, body) => handleResponse(err, mapAlbumInfo(body), cb))
    }

    function getTopAlbums(mbid, cb, page = 1) {
        return request(
            `${urlConfig.baseUrl}/?method=artist.gettopalbum&page=${page}&mbid=${mbid}&${apiKeyQueryString}&format=json`,
            (err, _res, body) => handleResponse(err, mapTopAlbums(body), cb))
    }

    function mapArtists(result) {
        return {artists: JSON.parse(result).results.artistmatches.artist.map(a => {
            return {
                name: a.name,
                mbid: a.mbid,
                url: a.url,
                images: a.image
            }
        })}
    }

    function mapTopAlbums(response) {
        return {albums: JSON.parse(response).topalbums.album.map(a => {
            return {
            name: a.name,
            url: a.url,
            mbid: a.mbid,
            artist: a.artist,
            images: a.image
            }
        })}
    }

    function mapAlbumInfo(response) {
        const result = JSON.parse(response)
        return {album: {
            name: result.album.name,
            artist: result.album.artist,
            mbid: result.album.mbid,
            url: result.album.url,
            images: result.album.image,
            tracks: result.tracks.track.map(t => {
                return {
                    name: t.name,
                    url: t.url,
                    duration: t.duration,
                    artist: t.artist
                }
            })
        }}
    }

    function formatWhiteSpace(value) {
        return value.replace(/ /gi, '+')
    }

    return {
        getArtists: getArtists,
        getTopAlbums: getTopAlbums,
        getAlbumInfo: getAlbumInfo
    }
}()