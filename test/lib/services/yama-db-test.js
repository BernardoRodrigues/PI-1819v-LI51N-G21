const assert = require('assert')
const service = require('./../../../lib/services/yama-db')

describe('Yama Db Create Playlist', function() {
    it('', function() {
        service.createPlaylist("xpto", "something", (result) => service.deletePlaylist(result._id))
    })
})