'use strict'
module.exports = function() {

    const request = require('request')
    const endpoints = require('./../config/endpoints')
    const InvalidParametersError = require('./invalid-paramters-error')
    const ServerDownError = require('./server-down-error')

    const Image = require('./model/image-dto-model')
    const Artist = require('./model/artist-dto-model')
    const Album = require('./model/album-dto-model')
    const AlbumInfo = require('./model/album-info-dto-model')
    const Track = require('./model/track-dto-model')

    function getArtists(artist, cb, page = 1) {
        if (!artist || !artist.name || artist.name.length === 0)
            throw new InvalidParametersError('Artist name can not be null', 400)
        return request(
            endpoints.getArtistsEndpoint(artist.name, page),
            (err, _res, body) => handleResponse(err, mapArtists, body, cb))
    }

    function handleResponse(err, mapper, body, cb) {
        if (err) {
            if (err.error === 500) throw new ServerDownError('Last fm Api is down', 400)
        }
        const result = JSON.parse(body)
        cb(mapper(result))
    }

    function getAlbumInfo(album, cb) {
        if (!album || !album.mbid || album.mbid.length === 0)
            throw new InvalidParametersError('Album mbid can not be null', 400)
        return request(
            endpoints.getAlbumInfoEndpoint(album.mbid),
            (err, _res, body) => handleResponse(err, mapAlbumInfo, body, cb))
    }

    function getTopAlbums(artist, cb, page = 1) {
        if (!artist || !artist.mbid || artist.mbid.length === 0)
            throw new InvalidParametersError('Artist mbid can not be null', 400)
        return request(
            endpoints.getTopAlbumsEndpoint(artist.mbid, page),
            (err, _res, body) => handleResponse(err, mapTopAlbums, body, cb))
    }

    function mapArtists(result) {
        return result.results.artistmatches.artist.filter(a => a.mbid).map(a => 
            Artist.init(a.name, a.mbid, a.url, a.image.map(i => Image.init(i['#text'])))
        )
    }

    /* albums without mbid are ignored */
    function mapTopAlbums(result) {
        if (result && result.error && result.error === 6) 
            throw new InvalidParametersError('No album exists with the mbid given', 400)
        return result.topalbums.album.filter(a => a.mbid).map(a => 
            Album.init(a.name, a.url, a.mbid, a.image.map(i => Image.init(i['#text'])), 
                Artist.init(a.artist.name, a.artist.mbid, a.artist.url, a.image.map(i => Image.init(i['#text'])))
            )
        )
    }

    function mapAlbumInfo(result) {
        if (result && result.error && result.error === 6) 
            throw new InvalidParametersError('No album exists with the mbid given', 400)
        const album = result.album
        return AlbumInfo.init(album.name, album.mbid, album.artist, album.url, 
            album.image.map(i => Image.init(i['#text'])), 
            album.tracks.track.map(t => Track.init(t.name, t.url, t.duration, 
                Artist.init(t.artist.name, t.artist.mbid, t.artist.url, []))))
    }

    return {
        getArtists: getArtists,
        getTopAlbums: getTopAlbums,
        getAlbumInfo: getAlbumInfo
    }
}()