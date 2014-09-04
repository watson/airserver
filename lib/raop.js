'use strict';

module.exports = function (server) {
  server.on('raop', function (c) {
    c.end();
  });
};
