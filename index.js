'use strict';

var port = process.env.PORT = process.env.PORT || 5000;

var http = require('http');
var airserver = require('./lib/airserver');

var server = module.exports = http.createServer();

server.on('newListener', function (type, listener) {
  if (type === 'request') {
    console.log('Starting AirServer...');
    server.listen(port, function () {
      console.log('AirServer listening on port', port);
      airserver(port);
    });
  }
});
