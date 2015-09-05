'use strict'

var debug = require('debug')('airserver')
var util = require('util')
var EventEmitter = require('events').EventEmitter
var xtend = require('xtend')
var raop = require('raop-server')
var airplay = require('airplay-server')

var conf = require('../settings/vasseur')

var AirServer = function (name) {
  var airserver = this
  EventEmitter.call(this)

  var raopOpts = {
    name: name,
    mac: global.mac,
    txt: conf.raop
  }

  this.raop = raop(raopOpts, function (c) {
    debug('RAOP client connected')
    airserver.emit('raop', c)
  })

  var airplayOpts = {
    name: name,
    mac: global.mac,
    txt: xtend(conf.airplay, { deviceid: global.mac })
  }

  this.airplay = airplay(airplayOpts, function (req, res) {
    airserver.emit('airplay', req, res)
  })
}
util.inherits(AirServer, EventEmitter)

AirServer.prototype.listen = function () {
  this.raop.listen(arguments[0] || 5000)
  this.airplay.listen(arguments[1] || 7000)
}

module.exports = function (name) {
  return new AirServer(name)
}
