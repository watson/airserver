'use strict';

module.exports = function (server) {
  return function (req, res) {
    server.emit('photo', req);
  };
};
