'use strict'

const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const passport = require('passport')
const session = require('express-session')
const store = require('express-file-store')
const express = require('express')
const app = express()
const rp = require('request-promise')
const lastFmService = require('./lib/services/lastfm-data')(rp)
const db = require('./lib/services/yama-db')(rp)
const serviceDb = require('./lib/yama-db-service')(db)
const serviceArtist = require('./lib/yama-lastfm-service')(lastFmService)
const usersApi = require('./lib/yama-web-api-users')(serviceDb, express.Router())
const playlistApi = require('./lib/yama-web-api-playlists')(serviceDb, express.Router(), usersApi)
const artistApi = require('./lib/yama-web-api-artist')(serviceArtist, express.Router())
const pkg = require('./package.json')
const nconf = require('nconf')

nconf.argv()
nconf.defaults({conf: path.join(__dirname, '/config.json')})


const port = nconf.get('port')

if (!port) {
    throw new Error("Port number must be passed")
}

const version = `v${pkg.version.toString()}`

// passport.serializeUser((user, done) => done(null, {
//     username: user.username,

// }))
// passport.deserializeUser()
// app.use(passport.)
app.use(morgan('dev'))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

app.get('/api/version', (req, res) => res.status(200).send(pkg.version));
app.use(`/api/${version}/auth`, usersApi)
app.use(`/api/${version}/playlists`, playlistApi)
app.use(`/api/${version}/artists`, artistApi)
app.use(notFound)

function serializeUser(user, done) {
    done()
}

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