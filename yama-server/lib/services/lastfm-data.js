'use strict'
module.exports = function (request) {

    const endpoints = require('./../config/endpoints')
    const InvalidParametersError = require('./invalid-paramters-error')
    const ServerDownError = require('./server-down-error')

    const Image = require('./model/image-dto-model')
    const Artist = require('./model/artist-dto-model')
    const Album = require('./model/album-dto-model')
    const AlbumInfo = require('./model/album-info-dto-model')
    const Track = require('./model/track-dto-model')

    function getArtists(artist, page = 1) {
        if (!artist || !artist.name || artist.name.length === 0)
            throw new InvalidParametersError('Artist name can not be null', 400)
        return request
            .get(endpoints.getArtistsEndpoint(artist.name, page), {
                json: true
            })
            .then(mapArtists)
            .catch(handleError)
    }

    function getAlbumInfo(album) {
        if (!album || !album.mbid || album.mbid.length === 0)
            throw new InvalidParametersError('Album mbid can not be null', 400)
        return request
            .get(endpoints.getAlbumInfoEndpoint(album.mbid), {
                json: true
            })
            .then(mapAlbumInfo)
            .catch(handleError)
    }

    function getTopAlbums(artist, page = 1) {
        if (!artist || !artist.mbid || artist.mbid.length === 0)
            throw new InvalidParametersError('Artist mbid can not be null', 400)
        return request
            .get(endpoints.getTopAlbumsEndpoint(artist.mbid, page), {
                json: true
            })
            .then(mapTopAlbums)
            .catch(handleError)
    }

    function handleError(err) {
        if (err.statusCode >= 500) {
            throw new ServerDownError('Elastic Search is down', 500)
        }
        if (err.statusCode >= 400) {
            throw new InvalidParametersError('Parameters were wrong', 400)
        }
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
}