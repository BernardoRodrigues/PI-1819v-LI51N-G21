const assert = require('assert')
const lastFm = require('./../mocks/lastfm-data-mock')
const elasticSearch = require('./../mocks/yama-db-mock')
const services = require('./../../lib/yama-services')(lastFm, elasticSearch)

