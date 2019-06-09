'use strict'

const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const express = require('express')
const favicon = require('express-favicon')
const app = express()
const rp = require('request-promise')
const lastFmService = require('./lib/services/lastfm-data')(rp)
const db = require('./lib/services/yama-db')(rp)
const serviceDb = require('./lib/yama-db-service')(db)
const serviceArtist = require('./lib/yama-lastfm-service')(lastFmService)
const playlistApi = require('./lib/yama-web-api-playlists')(serviceDb, express.Router())
const artistApi = require('./lib/yama-web-api-artist')(serviceArtist, express.Router())
const pkg = require('./package.json')
const nconf = require('nconf')

nconf.argv()
nconf.defaults({conf: path.join(__dirname, '/config.json')})


const port = nconf.get('port')

if (!port) {
    throw new Error("Port number must be passed")
}

const version = `v${pkg.version.toString().charAt(0)}`

app.use(express.static(path.join(__dirname, 'app')))
app.use(morgan('dev'))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

app.use(favicon(path.join(__dirname, 'images/favicon.png')))
app.get('/api/version', (req, res) => res.status(200).send(pkg.version));
app.use(`/api/${version}/playlists`, playlistApi)
app.use(`/api/${version}/artists`, artistApi)
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