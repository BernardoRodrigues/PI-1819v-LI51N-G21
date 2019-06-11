const Handlebars = require('../node_modules/handlebars/dist/handlebars')

const compiledTemplate = {
    header: syncToAsync(Handlebars.compile(require('./templates/header.hbs').default))
}

function syncToAsync(syncF) {
    return async function (...args) {
        return syncF.apply(this, args)
    }
}

module.exports = {
    header: {
        view: compiledTemplate.header,
        script: () => {}
    }
}
