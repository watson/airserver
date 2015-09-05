'use strict';

// hack to ensure that we get a new mac-address every time to avoid that the
// settings are cached on the phone
global.mac = String(Math.random()).substr(2, 12).match(/../g).join(':');

var gm = require('graphicsmagick-stream');
var pictureTube = require('picture-tube');

var airserver = require('../')('Picture Frame ' + global.mac.substr(0, 5));

airserver.on('photo', function (stream) {
  var tube = pictureTube();
  tube.pipe(process.stdout);
  var toPng = gm({ format: 'png' });
  stream.pipe(toPng()).pipe(tube);
});

airserver.listen();
