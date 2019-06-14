const Handlebars = require('../node_modules/handlebars/dist/handlebars')

const scripts = {
    artists: require('./scripts/artists'),
    header: require('./scripts/header'),
    albums: require('./scripts/albums'),
    albumInfo: require('./scripts/album-info'),
    playlists: require('./scripts/playlists'),
    tracks: require('./scripts/tracks'),
    header: require('./scripts/header')
}

const compiledTemplates = {
    artists: syncToAsync(Handlebars.compile(require('./templates/artists-table.hbs').default)),
    albums: syncToAsync(Handlebars.compile(require('./templates/albums-table.hbs').default)),
    albumInfo: syncToAsync(Handlebars.compile(require('./templates/album-info-table.hbs').default)),
    playlists: syncToAsync(Handlebars.compile(require('./templates/playlist-table.hbs').default)),
    tracks: syncToAsync(Handlebars.compile(require('./templates/tracks-table.hbs').default)),
    header: syncToAsync(Handlebars.compile(require('./templates/header.hbs').default)),
    // welcome: syncToAsync(Handlebars.compile(require('./templates/welcome.hbs').default)),
    // search: syncToAsync(Handlebars.compile(require('./templates/search.hbs').default)),
    // searchResults: syncToAsync(Handlebars.compile(require('./templates/searchResults.hbs').default)),
    // alert: syncToAsync(Handlebars.compile(require('./templates/alert.hbs').default)),
}

function syncToAsync(syncF) {
    return async function (...args) {
        return syncF.apply(this, args)
    }
}

module.exports = {
    artists: {
        view: compiledTemplates.artists,
        script: () => scripts.artists(compiledTemplates.albums)
    },
    albums: {
        view: compiledTemplates.albums,
        script: () => scripts.artists(compiledTemplates.albumInfo)
    },
    albumInfo: {
        view: compiledTemplates.albumInfo,
        script: () => scripts.albumInfo()
    },
    playlists: {
        view: compiledTemplates.playlists,
        script: () => scripts.playlists(compiledTemplates.tracks)
    },
    tracks: {
        view: compiledTemplates.tracks,
        script: () => scripts.tracks()
    },
    header: {
        view: compiledTemplates.header,
        script: () => scripts.header(null, compiledTemplates.playlists, compiledTemplates.artists)
    }
}