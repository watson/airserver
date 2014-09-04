'use strict';

var gm = require('graphicsmagick-stream');
var pictureTube = require('picture-tube');

var airserver = require('../')('Picture Frame');

airserver.on('photo', function (stream) {
  var tube = pictureTube();
  tube.pipe(process.stdout);
  var toPng = gm({ format: 'png' });
  stream.pipe(toPng()).pipe(tube);
});

airserver.listen();
