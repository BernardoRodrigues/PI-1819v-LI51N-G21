module.exports = function() {
    const request = require('request')
    const config = require('./../config/elastic-search-config.json')
    const uuid = require('uuid/v4')

    this.createPlaylist = function(name, description, cb) {
        const tracksIdList = uuid()
        const playlistId = uuid()
        request
            .post(`${config.baseUrl}/playlists`, 
            {body: {id: palylistId, tracksListId: tracksIdList, name: name, description: description}})
            .on('response', _ => {
                request.post(`${config.baseUrl}/playlists/${playlistId}/tracks`,
                {body: {id: tracksIdList, tracks: []}})
                .on('response', response => {
                    cb(null, JSON.parse(response))
                })
                .on('error', err => cb(err))
            })
            .on('error', err => cb(err))
    }

    this.deletePlaylist = function(playlistId, trackListId, cb) {
        return request.delete(`${config.baseUrl}/playlists/${playlistId}/tracks/${trackListId}`)
            .on('response', _ => {
                request.delete(`${config.baseUrl}/playlists/${playlistId}`)
                    .on('response', response => cb(null, JSON.parse(response)))
                    .on('error', err => cb(err))
            })
            .on('error', err => cb(err))
    }
}