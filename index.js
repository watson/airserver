'use strict'

var airserver = require('./lib/airserver')
var raop = require('./lib/raop')
var airplay = require('./lib/airplay')

module.exports = function (name) {
  var server = airserver(name)

  raop(server)
  airplay(server)

  return server
}
