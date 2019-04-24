const service = require('./../../../lib/services/lastfm-data')
const Artist = require('./../../../lib/services/model/artist-dto-model')
const Album = require('./../../../lib/services/model/album-dto-model')
const assert = require('assert')

describe("Get Artists Last FM Service", function() {
    const name = 'cher'
    it(`should return results from search with artist name ${name}`, function() {  
        service.getArtists(Artist.init(name), function(result) {
            console.log("Artist Search")
            assert.ok(result)
        })
    })
})

describe("Get Top Albums Last FM Service", function() {
    const mbid = 'bfcc6d75-a6a5-4bc6-8282-47aec8531818'
    it(`should return top albums from artist with mbid ${mbid}`, function() {  
        service.getTopAlbums(Artist.init(undefined, mbid), function(result) {
            console.log("Top Albums")
            assert.ok(result)
        })
    })
})

describe("Get Album Info Last FM Service", function() {
    const mbid = '488bfc7f-c1a3-4488-b8c6-750ddf2bb157'
    it(`should return album info from album with mbid ${mbid}`, function() {  
        service.getAlbumInfo(Album.init(undefined, undefined, mbid), function(result) {
            console.log("Album Info")
            assert.ok(result)
        })
    })
})