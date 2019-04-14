const router = require('./lib/router/router')
const api = require('./lib/yama-web-api')
const http = require('http')

router.get('/artists/search/:name', api.getArtists)
router.get('/albums/:mbid', api.getTopAlbums)

http.createServer(router).listen(8080, () => console.log("server started on port 8080"))