'use strict';

var debug = require('debug')('airserver');
var router = require('router')();

module.exports = function (server) {
  server.on('airplay', router);
};

var notImplemented = function (req, res) {
  debug('%s %s', req.method, req.url);
  res.end();
};

// generic airplay routes
router.post('/reverse', notImplemented);

// photo
router.put('/photo', notImplemented);

// slideshow
router.get('/slideshow-features', notImplemented);
router.put('/slideshows/{id}', notImplemented);

// video
router.get('/server-info', notImplemented);
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
