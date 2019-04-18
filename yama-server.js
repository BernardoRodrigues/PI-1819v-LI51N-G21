const router = require('./lib/router/router')
const api = require('./lib/yama-web-api')
const http = require('http')

router.get('/artists/search/:name', api.getArtists)
router.get('/artist/:mbid/albums', api.getTopAlbums)
router.get('/albums/:mbid', api.getAlbumInfo)

http.createServer(router).listen(8080, () => console.log("server started on port 8080"))