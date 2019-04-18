// const service = require('./../../../lib/services/lastfm-data')
// const assert = require('assert')

// describe("Get Artists Last FM Service", function() {
//     const name = 'cher'
//     it(`should return results from search with artist name ${name}`, function() {  
//         service.getArtists('cher', function(result) {
//             console.log("Artist Search")
//             assert.ok(result)
//         })
//     })
// })

// describe("Get Top Albums Last FM Service", function() {
//     const mbid = 'bfcc6d75-a6a5-4bc6-8282-47aec8531818'
//     it(`should return top albums from artist with mbid ${mbid}`, function() {  
//         service.getTopAlbums(mbid, function(result) {
//             console.log("Top Albums")
//             assert.ok(result)
//         })
//     })
// })

// describe("Get Album Info Last FM Service", function() {
//     const mbid = '488bfc7f-c1a3-4488-b8c6-750ddf2bb157'
//     it(`should return album info from album with mbid ${mbid}`, function() {  
//         service.getAlbumInfo(mbid, function(result) {
//             console.log("Album Info")
//             assert.ok(result)
//         })
//     })
// })

// describe("Get Artists Last FM Service Error", function() {
//     it('should throw error for not passing value', function() {
//         assert.throws(service.getArtists, TypeError, "Error thrown")
//     })
// })

// describe("Get Top Albums Last FM Service Error", function() {
//     it('should throw error for not passing value', function() {
//         assert.throws(service.getTopAlbums, Error, "Error thrown")
//     })
// })

// describe("Get Album Info Last FM Service Error", function() {
//     it('should throw error for not passing value', function() {
//         assert.throws(service.getAlbumInfo, Error, "Error thrown")
//     })
// })