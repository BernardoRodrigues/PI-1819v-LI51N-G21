'use strict'
module.exports = function() {

    const request = require('request')
    const endpoints = require('./../config/endpoints')
    const Image = require('./model/image-dto-model')
    const Artist = require('./model/artist-dto-model')
    const Album = require('./model/album-dto-model')
    const AlbumInfo = require('./model/album-info-dto-model')
    const Track = require('./model/track-dto-model')

    function getArtists(name, cb, page = 1) {
        return request(
            endpoints.getArtistsEndpoint(name, page),
            (err, _res, body) => handleResponse(err, mapArtists, body, cb))
    }

    function handleResponse(err, mapper, result, cb) {
        if (err) throw err
        cb(mapper(result))
    }

    function getAlbumInfo(mbid, cb, page = 1) {
        return request(
            endpoints.getAlbumInfoEndpoint(mbid, page),
            (err, _res, body) => handleResponse(err, mapAlbumInfo, body, cb))
    }

    function getTopAlbums(mbid, cb, page = 1) {
        return request(
            endpoints.getTopAlbumsEndpoint(mbid, page),
            (err, _res, body) => handleResponse(err, mapTopAlbums, body, cb))
    }

    function mapArtists(result) {
        if (!result || Object.entries(result).length === 0) throw Error('Result is empty')
        return JSON.parse(result).results.artistmatches.artist/*.filter(a => a.mbid !== undefined)*/.map(a =>             
            Artist.init(a.name, a.mbid, a.url, a.image.map(i => Image.init(i['#text'])))            
        )
    }

    /* albums without mbid are ignored */
    function mapTopAlbums(result) {
        if (!result || Object.entries(result).length === 0) throw Error('Result is empty')
        return JSON.parse(result).topalbums.album.filter(a => a.mbid !== undefined).map(a => 
            Album.init(a.name, a.url, a.mbid, a.image.map(i => Image.init(i['#text'])), 
                Artist.init(a.artist.name, a.artist.mbid, a.artist.url, a.image.map(i => Image.init(i['#text'])))
            )
        )
    }

    function mapAlbumInfo(result) {
        if (!result || Object.entries(result).length === 0) throw Error('Result is empty')
        const album = JSON.parse(result).album
        return AlbumInfo.init(album.name, album.mbid, album.artist, album.url, 
            album.image.map(i => Image.init(i['#text'])), 
            album.tracks.track.map(t => Track.init(t.name, t.url, t.duration, 
                Artist.init(t.artist.name, t.artist.mbid, t.artist.url, []))))
    }

    // TODO add module with custom errors

    return {
        getArtists: getArtists,
        getTopAlbums: getTopAlbums,
        getAlbumInfo: getAlbumInfo
    }
}()