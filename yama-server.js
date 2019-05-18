'use strict'

const morgan = require('morgan')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const rp = require('request-promise')
const lastFmService = require('./lib/services/lastfm-data')(rp)
const db = require('./lib/services/yama-db')(rp)
const serviceDb = require('./lib/yama-db-service')(db)
const serviceArtist = require('./lib/yama-lastfm-service')(lastFmService)
const playlistApi = require('./lib/yama-web-api-playlists')(serviceDb, express.Router())
const artistApi = require('./lib/yama-web-api-artist')(serviceArtist, express.Router())

const args = process.argv

if (args.length !== 3) {
    throw new Error("Port number must be passed")
}

const port = Number(args[2])

app.use(morgan('tiny'))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded
app.use('/playlist', playlistApi)
app.use('/artist', artistApi)
app.use(notFound)

function notFound(req, resp) {
    const err = {
        message: "Method or Path do not exist",
        statusCode: 404
    }
    resp
        .status(404)
        .type('json')
        .end(JSON.stringify(err))
}

app.listen(port, () => console.log(`server started on port ${port}`))