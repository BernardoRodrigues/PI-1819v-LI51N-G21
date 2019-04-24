const router = require('./lib/router/router')
const lastFmService = require('./lib/services/lastfm-data')
const db = require('./lib/services/yama-db')
const services = require('./lib/yama-services')(lastFmService, db)
const api = require('./lib/yama-web-api')(services)
const http = require('http')
const args = process.argv

// if (args.length !== 1) {
//     throw new Error("Port number must be passed")
// }

const port = 8080

router.get('/artists/search/:name', api.getArtists)
router.get('/artist/:mbid/albums', api.getTopAlbums)
router.get('/albums/:mbid', api.getAlbumInfo)
router.post('/playlist', api.createPlaylist)
router.delete('/playlist/:playlistId', api.deletePlaylist)
router.get('/playlists', api.getPlaylists)
router.get('/playlist/:playlistId', api.getPlaylistInfo)
router.put('/playlist/:playlistId/track', api.addMusicToPlaylist)
router.delete('/playlist/:playlistId/track', api.removeMusicFromPlaylist)
router.error(api.notFound)

http.createServer(router.findEndpoint).listen(port, () => console.log(`server started on port ${port}`))