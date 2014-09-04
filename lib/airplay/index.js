'use strict';

var debug = require('debug')('airserver');
var router = require('router')();

var photo = require('./photo');
var serverInfo = require('./server-info');

module.exports = function (server) {
  server.on('airplay', router);

  // generic airplay routes
  router.post('/reverse', notImplemented);

  // photo
  router.put('/photo', photo(server));

  // slideshow
  router.get('/slideshow-features', notImplemented);
  router.put('/slideshows/{id}', notImplemented);

  // video
  router.get('/server-info', serverInfo(server)); // isn't this also used for photos?
  router.post('/play', notImplemented);
  router.post('/scrub', notImplemented);
  router.post('/rate', notImplemented);
  router.post('/stop', notImplemented);
  router.get('/scrub', notImplemented);
  router.get('/playback-info', notImplemented);
  router.put('/setProperty', notImplemented);
  router.post('/getProperty', notImplemented);

  // screen mirroring
  router.get('/stream.xml', notImplemented);
  router.post('/stream', notImplemented);
};

var notImplemented = function (req, res) {
  debug('%s %s', req.method, req.url);
  res.end();
};
