module.exports = function() {
    const request = require('request')
    const config = require('./../config/elastic-search-config.json')
    const uuid = require('uuid/v4')

    this.createPlaylist = function(name, description, cb) {
        const body = {name: name, description: description, tracks: []}
        return request
            .post(`${config.baseUrl}/playlists`, 
            {body: body, json: body }, function(err, resp, body) {
                if (err) throw err
                cb(JSON.parse(body))
            })
    }

    this.deletePlaylist = function(playlistId, cb) {
        return request.delete(
            `${config.baseUrl}/playlists/${playlistId}`,
            function (err, resp, body) {
                if (err) throw err
                cb(JSON.parse(body))
            })
    }

    
}