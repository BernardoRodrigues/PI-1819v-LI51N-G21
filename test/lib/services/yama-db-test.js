const request = require('./../../mocks/request-promise-mock')
const assert = require('assert')
const chai = require('chai')
const service = require('./../../../lib/services/yama-db')(request)
const Playlist = require('./../../../lib/services/model/playlist-dto-model')
const Track = require('./../../../lib/services/model/track-dto-model')
const Artist = require('./../../../lib/services/model/artist-dto-model')

describe('Yama Db Create and Delete Playlist', function() {
    it('should create and delete playlist', function() {
        service
                .createPlaylist(Playlist.init(undefined, "xpto", "something"))
                .then(result => {
                    assert.ok(result)
                })
    })
})

describe('Yama Db Update Playlist', function() {
    it('should update playlist', function() {
        service.updatePlaylist(Playlist.init("1kYqrWoB878KWpggjkcH", "xpto1", "something1"))
        .then((result) => {
            assert.ok(result)
        })
    })
})


describe('Yama Db Get All Playlists', function() {
    it('should get all playlists', function() {
        service.getPlaylists()
        .then((result) => {
            assert.ok(result)
        })
    })
})

describe('Yama Db Get Playlist Info', function() {
    it('should get playlist information', function() {
        service.getPlaylistInfo(Playlist.init("1kYqrWoB878KWpggjkcH"))
        .then((result) => {
            assert.ok(result)
        })
    })
})

describe('Yama Db Add Tracks', function() {
    it('should add tracks to playlist', function() {
        service.getPlaylistInfo(
            Playlist.init("1kYqrWoB878KWpggjkcH", undefined, undefined, 
            [Track.init("Swagger Jagger (Hygrade Radio Mix)", 
            "https://www.last.fm/music/Cher+Lloyd/_/Swagger+Jagger+(Hygrade+Radio+Mix)",
            "212",
            Artist.init("Cher Lloyd", 
            "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
            "https://www.last.fm/music/Cher+Lloyd"))]))
            .then((result) => {
            assert.ok(result)
        })
    })
})

describe('Yama Db Remove Tracks', function() {
    it('should remove tracks to playlist', function() {
        service.getPlaylistInfo(
            Playlist.init("1kYqrWoB878KWpggjkcH", undefined, undefined, []))
            .then((result) => {
            assert.ok(result)
        })
    })
})

