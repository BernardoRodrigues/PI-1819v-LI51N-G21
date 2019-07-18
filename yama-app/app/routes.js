const Handlebars = require('../node_modules/handlebars/dist/handlebars')

const scripts = {
    artists: require('./scripts/artists'),
    header: require('./scripts/header'),
    albums: require('./scripts/albums'),
    albumInfo: require('./scripts/album-info'),
    playlists: require('./scripts/playlists'),
    tracks: require('./scripts/tracks'),
    header: require('./scripts/header'),
    welcome: require('./scripts/welcome'),
    alert: require('./scripts/alert'),
    signUp: require('./scripts/sign-up'),
    login: require('./scripts/login')
}

const compiledTemplates = {
    artists: syncToAsync(Handlebars.compile(require('./templates/artists-table.hbs').default)),
    albums: syncToAsync(Handlebars.compile(require('./templates/albums-table.hbs').default)),
    albumInfo: syncToAsync(Handlebars.compile(require('./templates/album-info-table.hbs').default)),
    playlists: syncToAsync(Handlebars.compile(require('./templates/playlist-table.hbs').default)),
    tracks: syncToAsync(Handlebars.compile(require('./templates/tracks-table.hbs').default)),
    header: syncToAsync(Handlebars.compile(require('./templates/header.hbs').default)),
    welcome: syncToAsync(Handlebars.compile(require('./templates/welcome.hbs').default)),
    // search: syncToAsync(Handlebars.compile(require('./templates/search.hbs').default)),
    // searchResults: syncToAsync(Handlebars.compile(require('./templates/searchResults.hbs').default)),
    alert: syncToAsync(Handlebars.compile(require('./templates/alert.hbs').default)),
    signUp: syncToAsync(Handlebars.compile(require('./templates/sign-up.hbs').default)),
    login: syncToAsync(Handlebars.compile(require('./templates/login.hbs').default))
}

function syncToAsync(syncF) {
    return async function (...args) {
        return syncF.apply(this, args)
    }
}

const signUp = {
    view: compiledTemplates.signUp,
    script: () => scripts.signUp(compiledTemplates.alert, scripts.alert)
}
const login = {
    view: compiledTemplates.login,
    script: () => scripts.login(compiledTemplates.alert, scripts.alert)
}
const albumInfo = {
    view: compiledTemplates.albumInfo,
    script: () => scripts.albumInfo()
}
const albums = {
    view: compiledTemplates.albums,
    script: () => scripts.artists(compiledTemplates.albumInfo, albumInfo.script)
}

const artists = {
    view: compiledTemplates.artists,
    script: () => scripts.artists(compiledTemplates.albums, albums.script)
}

const tracks = {
    view: compiledTemplates.tracks,
    script: () => scripts.tracks()
}

const playlists = {
    view: compiledTemplates.playlists,
    script: () => scripts.playlists(compiledTemplates.tracks, tracks.script)
}

const header = {
    view: compiledTemplates.header,
    script: () => scripts.header(null, compiledTemplates.playlists, playlists.script)
}
const welcome = {
    view: compiledTemplates.welcome,
    script: () => scripts.welcome(compiledTemplates.artists, artists.script, scripts.alert, compiledTemplates.alert)
}

module.exports = {
    welcome: welcome,
    header: header,
    artists: artists,
    playlists: playlists,
    tracks: tracks,
    albums: albums,
    albumInfo: albumInfo,
    login: login,
    signUp: signUp
}