module.exports = function() {

    const endpointResponseMapper = require('./endpoint-response-mapper')

    function request(endpoint, options) {
        return new Promise(function(resolve, reject) {
            resolve(endpointResponseMapper.map(endpoint))
        })
    }

    return {
        get: request,
        post: request,
        put: request,
        delete: request
    }

}()