'use strict';

var http = require('http');
var airserver = require('./lib/airserver');

module.exports = function (onRequest) {
  var server = http.createServer(onRequest);
  server.on('listening', function () {
    airserver(server.address().port);
  });
  return server;
};
