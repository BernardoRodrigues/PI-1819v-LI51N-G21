'use strict'

const morgan = require('morgan')
const express = require('express')
const app = express()
const rp = require('request-promise')
const lastFmService = require('./lib/services/lastfm-data')(rp)
const db = require('./lib/services/yama-db')(rp)
const serviceDb = require('./lib/yama-db-service')(db)
const apiService = require('./lib/yama-lastfm-service')(lastFmService)
const playlistApi = require('./lib/yama-web-api-playlists')(serviceDb, express.Router())
const artistApi = require('./lib/yama-web-api-artist')(apiService, express.Router())

const args = process.argv

if (args.length !== 3) {
    throw new Error("Port number must be passed")
}
app.use(morgan)
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(artistApi, playlistApi)
app.use(notFound)

function notFound(req, resp) {
    resp.statusCode = 404
    resp.setHeader('Content-Type', 'application/json')
    resp.end(JSON.stringify({
        message: "Method or Path do not exist",
        statusCode: 404
    }))
}
app.listen(port, () => console.log(`server started on port ${port}`))
