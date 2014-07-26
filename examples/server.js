'use strict';

var bplist = require('bplist-parser');
var gm = require('graphicsmagick-stream');
var pictureTube = require('picture-tube');

var airserver = require('../')();

var getServerInfo = function (req, res) {
  var mac = 'B8:8D:12:14:43:D4';
  var features = 268438015;
  var model = 'AppleTV3,1';
  var protovers = '1.0';
  var srcvers = '150.33';

  var body = '<?xml version="1.0" encoding="UTF-8"?>\n' +
             '<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"\n' +
             ' "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n' +
             '<plist version="1.0">\n' +
             ' <dict>\n' +
             '  <key>deviceid</key>\n' +
             '  <string>' + mac + '</string>\n' +
             '  <key>features</key>\n' +
             '  <integer>' + features + '</integer>\n' +
             '  <key>vv</key>\n' +
             '  <string>1</string>\n' +
             '  <key>rhd</key>\n' +
             '  <string>1.06.5</string>\n' +
             '  <key>pw</key>\n' +
             '  <string>0</string>\n' +
             '  <key>srcvers</key>\n' +
             '  <string>' + srcvers + '</string>\n' +
             '  <key>rmodel</key>\n' +
             '  <string>MacBookair4,2</string>\n' +
             '  <key>model</key>\n' +
             '  <string>' + model + '</string>\n' +
             '  <key>protovers</key>\n' +
             '  <string>' + protovers + '</string>\n' +
             ' </dict>\n' +
             '</plist>';

  res.setHeader('Content-Type', 'text/x-apple-plist+xml');
  res.setHeader('Content-Length', body.length);
  res.end(body);
};

var putPhoto = function (req, res) {
  var tube = pictureTube();
  tube.pipe(process.stdout);
  var toPng = gm({ format: 'png' });
  req.pipe(toPng()).pipe(tube);
};

airserver.on('airplay', function (req, res) {
  switch (req.url) {
    case '/photo':
      putPhoto(req, res);
      break;
    default:
      res.end();
  }
});

airserver.listen();
