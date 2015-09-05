'use strict';

var debug = require('debug')('airserver');
var net = require('net');
var http = require('http');
var util = require('util');
var EventEmitter = require('events').EventEmitter;
var raop = require('raop-server');
var airplay = require('airplay-server');

var AirServer = function (name) {
  var airserver = this;
  EventEmitter.call(this);

  this.raop = raop(name, function (c) {
    debug('RAOP client connected');
    airserver.emit('raop', c);
  });
  this.airplay = airplay(name, function (req, res) {
    debug('%s %s', req.method, req.url);
    airserver.emit('airplay', req, res);
  });
};
util.inherits(AirServer, EventEmitter);

AirServer.prototype.listen = function () {
  var airserver = this;
  this.raop.listen(arguments[0] || 5000, function () {
    debug('RAOP server listening on port %d', airserver.raop.address().port);
  });
  this.airplay.listen(arguments[1] || 7000, function () {
    debug('AirPlay server listening on port %d', airserver.airplay.address().port);
  });
};

module.exports = function (name) {
  return new AirServer(name);
};
