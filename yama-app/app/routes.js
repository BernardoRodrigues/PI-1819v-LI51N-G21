const Handlebars = require('../node_modules/handlebars/dist/handlebars')


const compiledTemplates = {
    artists: syncToAsync(Handlebars.compile(require('./templates/artists-table.hbs').default)),
    albums: syncToAsync(Handlebars.compile(require('./templates/albums-table.hbs').default)),
    albumInfo: syncToAsync(Handlebars.compile(require('./templates/album-info-table.hbs').default)),
    playlists: syncToAsync(Handlebars.compile(require('./templates/playlist-table.hbs').default)),
    
    welcome: syncToAsync(Handlebars.compile(require('./templates/welcome.hbs').default)),
    search: syncToAsync(Handlebars.compile(require('./templates/search.hbs').default)),
    searchResults: syncToAsync(Handlebars.compile(require('./templates/searchResults.hbs').default)),
    alert: syncToAsync(Handlebars.compile(require('./templates/alert.hbs').default)),
}

function syncToAsync(syncF) {
    return async function (...args) {
        return syncF.apply(this, args)
    }
}

module.exports = {
    artists: {
        view: compiledTemplates.artists,
        script: () => {} 
    },
    albums: {
        view: compiledTemplates.albums,
        script: () => {}
    },
    albumInfo: {
        view: compiledTemplates.albumInfo,
        script: () => {}
    },
    playlists: {
        view: compiledTemplates.playlists,
        script: () => {}
    }
}