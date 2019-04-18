let endpoints = []
let error;

module.exports = function(req, resp) {
    function findEndpoint(o, req) {
        if (req.method !== o.method) return false
        const url = req.url.split('/')
        if (url.length !== o.uri.length) return false
        for (let index = 0; index < url.length; index++) {
            const element = url[index];
            if (!o.uri[index].contains(':') && o.uri[index] !== element) {
                return false
            }
        }
        return true
    }

    const result = this.endpoints.find(o => findEndpoint(o, req))
    if (!result) return error(req, resp)
    return result.func(req, resp)
}

module.exports.get = function(uri, func) {
    endpoints.push({
        method: 'GET',
        uri: uri.split('/'),
        func: func
    })
}

module.exports.post = function(uri, func) {
    endpoints.push({
        method: 'POST',
        uri: uri.split('/'),
        func: func
    })
}

module.exports.put = function(uri, func) {
    endpoints.push({
        method: 'PUT',
        uri: uri.split('/'),
        func: func
    })
}

module.exports.delete = function(uri, func) {
    endpoints.push({
        method: 'DELETE',
        uri: uri.split('/'),
        func: func
    })
}

module.exports.error = function(func) {
    error = func
}