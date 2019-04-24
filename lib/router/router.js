

module.exports = function () {
    let stack = []
    let err;

    function endpoint(req, resp) {
        const result = stack.find(o => findEndpoint(o, req))
        if (!result && err) return err(req, resp)
        return result.func(req, resp)
    }
    
    function findEndpoint(o, req) {
        if (req.method !== o.method) return false
        const url = req.url.split('/')
        if (url.length !== o.uri.length) return false
        for (let index = 0; index < url.length; index++) {
            const element = url[index];
            if (!o.uri[index].includes(':') && o.uri[index] !== element) {
                return false
            }
        }
        return true
    }
    
    function get(uri, func) {
        stack.push({
            method: 'GET',
            uri: uri.split('/'),
            func: func
        })
    }
    
    function post(uri, func) {
        stack.push({
            method: 'POST',
            uri: uri.split('/'),
            func: func
        })
    }
    
    function put(uri, func) {
        stack.push({
            method: 'PUT',
            uri: uri.split('/'),
            func: func
        })
    }
    
    const _delete = function (uri, func) {
        stack.push({
            method: 'DELETE',
            uri: uri.split('/'),
            func: func
        });
    };
    
    function error(func) {
        err = func
    }
    return {
        get: get,
        post: post,
        put: put,
        delete: _delete,
        error: error,
        findEndpoint: endpoint
    }
}()

