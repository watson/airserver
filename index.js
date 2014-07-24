'use strict';

var port = process.env.PORT = process.env.PORT || 5000;

var http = require('http');
var airserver = require('./lib/airserver');

module.exports = function (onRequest) {
  var server = http.createServer(onRequest);
  server.on('listening', function () {
    airserver(server.address().port);
  });
  return server;
};
