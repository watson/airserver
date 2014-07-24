'use strict';

var port = process.env.PORT = process.env.PORT || 5000;

var http = require('http');
var airserver = require('./lib/airserver');

var server = module.exports = http.createServer();

console.log('Starting HTTP server...');
server.listen(port, function () {
  console.log('HTTP server listening on port', port);
  airserver(port);
});
