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

module.exports = {
    signUp: {
        view: compiledTemplates.signUp,
        script: () => scripts.signUp(compiledTemplates.alert, scripts.alert)
    },
    login: {
        view: compiledTemplates.login,
        script: () => scripts.login(compiledTemplates.alert, scripts.alert)
    },
    artists: {
        view: compiledTemplates.artists,
        script: () => scripts.artists(compiledTemplates.albums, this.albums.script)
    },
    albums: {
        view: compiledTemplates.albums,
        script: () => scripts.artists(compiledTemplates.albumInfo, this.albumInfo.script)
    },
    albumInfo: {
        view: compiledTemplates.albumInfo,
        script: () => scripts.albumInfo()
    },
    playlists: {
        view: compiledTemplates.playlists,
        script: () => scripts.playlists(compiledTemplates.tracks, this.tracks.script)
    },
    tracks: {
        view: compiledTemplates.tracks,
        script: () => scripts.tracks()
    },
    header: {
        view: compiledTemplates.header,
        script: () => scripts.header(null, compiledTemplates.playlists, compiledTemplates.artists)
    },
    welcome: {
        view: compiledTemplates.welcome,
        script: () => scripts.welcome(compiledTemplates.artists, this.artists.script, scripts.alert, compiledTemplates.alert)
    }
}