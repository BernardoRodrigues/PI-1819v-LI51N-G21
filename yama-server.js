'use strict'
const router = require('./lib/router/router')
const api = require('./lib/yama-web-api')
const http = require('http')
const args = process.argv

if (args.length !== 3) {
    //throw new Error("Port number must be passed")
    args.push('3000')
}

const port = parseInt(args.pop())

router.get('/artists/search/:name', api.getArtists)
router.get('/artists/:mbid/albums', api.getTopAlbums)
router.get('/albums/:mbid', api.getAlbumInfo)
router.post('/playlists', api.createPlaylist)
router.delete('/playlists/:playlistId', api.deletePlaylist)
router.get('/playlists', api.getPlaylists)
router.get('/playlists/:playlistId', api.getPlaylistInfo)
router.put('/playlists/:playlistId/track', api.addMusicToPlaylist)
router.delete('/playlists/:playlistId/track', api.removeMusicFromPlaylist)

http.createServer(router)
    .listen(port, () => console.log(`server started on port ${port}`))
