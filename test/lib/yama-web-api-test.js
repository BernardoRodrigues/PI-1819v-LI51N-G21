const assert = require('assert')
const lastFmMock = require('./../mocks/lastfm-data-mock')
const dbMock = require('./../mocks/yama-db-mock')
const services = require('./../mocks/yama-services-mock')(lastFmMock, dbMock)
const api = require('./../../lib/yama-web-api')(services)