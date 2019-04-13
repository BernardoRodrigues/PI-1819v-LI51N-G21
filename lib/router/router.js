module.exports = function() {

    
    let endpoints = []
    let err;
    
    this.get = function(uri, func) {
        endpoints.push({
            method: 'GET',
            uri: uri.split('/'),
            func: func
        })
    }
    this.post = function(uri, func) {
        endpoints.push({
            method: 'POST',
            uri: uri.split('/'),
            func: func
        })
    }


    this.put = function(uri, func) {
        endpoints.push({
            method: 'PUT',
            uri: uri.split('/'),
            func: func
        })
    }


    this.delete = function(uri, func) {
        endpoints.push({
            method: 'DELETE',
            uri: uri.split('/'),
            func: func
        })
    }

    this.err = function(func) {
        err = (func)
    }

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

    return function(req, resp) {
        const result = this.endpoints.find(o => findEndpoint(o, req))
        if (!result) err(req, resp)
        result.func(req, resp)
    }
}