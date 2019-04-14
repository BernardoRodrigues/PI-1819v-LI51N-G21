const service = require('./../../../lib/services/last-fm.service')
const assert = require('assert')

describe("Get Artists Last FM Service", function() {
    it('should return results from search with artist name cher', function() {  
        service.getArtists('cher', function(result) {
            
            console.log(result)
            assert.ok(result)
        })
    })
})
