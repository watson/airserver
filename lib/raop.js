'use strict';

var debug = require('debug')('airserver');

module.exports = function (server) {
  server.on('raop', function (c) {
    debug('RAOP client connection');
    c.end();
  });
};
