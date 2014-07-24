'use strict';

var port = process.env.PORT = process.env.PORT || 5000;

var http = require('http');
var airserver = require('./lib/airserver');

var server = module.exports = http.createServer();

server.on('listening', function () {
  airserver(server.address().port);
});
