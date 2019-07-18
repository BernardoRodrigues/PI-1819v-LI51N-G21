'use strict'

const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const passport = require('passport')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
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

const port = nconf.any('port')

if (!port) {
    throw new Error("Port number must be passed")
}

const version = `v${pkg.version.toString()}`

app.use(express.json())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded
app.use(session({
    resave: false, 
    saveUninitialized: true,
    store: new FileStore(),
    secret: "PI-1819V"
}))
passport.serializeUser(serializeUser)
passport.deserializeUser(deserializeUser)
app.use(passport.initialize())
app.use(passport.session())
app.use(morgan('dev'))
app.use('/favicon.ico', express.static(path.join(__dirname, '..', 'yama-app', 'app', 'images', 'favicon.png')))
app.use('/', express.static(path.join(__dirname,"..", "yama-app", "dist")))
app.get('/api/version', (req, res) => res.status(200).send(pkg.version));
console.log({version: version});
app.use(`/api/${version}/artists`, artistApi)
app.use(`/api/${version}/auth`, usersApi.router)
app.use(notFound)


 
app.use(usersApi.checkIfUserIsAuthenticated)
app.use(`/api/${version}/playlists`, playlistApi)

function serializeUser(user, done) {
    done(null, user)
}

function deserializeUser(user, done) {
    done(null, user)
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