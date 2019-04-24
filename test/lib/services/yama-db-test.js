const assert = require('assert')
const service = require('./../../../lib/services/yama-db')
const Playlist = require('./../../../lib/services/model/playlist-dto-model')
const Track = require('./../../../lib/services/model/track-dto-model')
const Artist = require('./../../../lib/services/model/artist-dto-model')

describe('Yama Db Create and Delete Playlist', function() {
    it('should create and delete playlist', function() {
        service.createPlaylist(Playlist.init(undefined, "xpto", "something"), (result) => {
            assert.ok(result)
            service.deletePlaylist(result, (result) => {
                assert.ok(result)
            })
        })
    })
})

describe('Yama Db Update Playlist', function() {
    it('should update playlist', function() {
        service.updatePlaylist(Playlist.init("dhcqLWoBkLjY0VBYGI1w", "xpto1", "something1"), (result) => {
            assert.ok(result)
        })
    })
})


describe('Yama Db Get All Playlists', function() {
    it('should get all playlists', function() {
        service.getPlaylists((result) => {
            assert.ok(result)
        })
    })
})

describe('Yama Db Get Playlist Info', function() {
    it('should get playlist information', function() {
        service.getPlaylistInfo(Playlist.init("dhcqLWoBkLjY0VBYGI1w"), (result) => {
            assert.ok(result)
        })
    })
})

describe('Yama Db Add Tracks', function() {
    it('should add tracks to playlist', function() {
        service.getPlaylistInfo(
            Playlist.init("dhcqLWoBkLjY0VBYGI1w", undefined, undefined, 
            [Track.init("Swagger Jagger (Hygrade Radio Mix)", 
            "https://www.last.fm/music/Cher+Lloyd/_/Swagger+Jagger+(Hygrade+Radio+Mix)",
            "212",
            Artist.init("Cher Lloyd", 
            "48fbfb0b-92ee-45eb-99c2-0bde4c05962e",
            "https://www.last.fm/music/Cher+Lloyd"))]), (result) => {
            assert.ok(result)
        })
    })
})

describe('Yama Db Remove Tracks', function() {
    it('should remove tracks to playlist', function() {
        service.getPlaylistInfo(
            Playlist.init("dhcqLWoBkLjY0VBYGI1w", undefined, undefined, []), (result) => {
            assert.ok(result)
        })
    })
})

