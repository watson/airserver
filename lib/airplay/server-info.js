'use strict';

var plist = require('plist');

module.exports = function (server) {
  return function (req, res) {
    var txt = server.airplay._txtRecord || {};
    var features = txt.features ?
      parseInt(txt.features.replace(/0x/g, '').split(',').reverse().join(''), 16) :
      268438015;

    var options = {
      deviceid: txt.deviceid || global.mac,
      features: features,
      vv: txt.vv || '1',
      rhd: '1.06.5',
      pw: '0',
      srcvers: txt.srcvers || '150.33',
      rmodel: 'MacBookair4,2',
      model: txt.model || 'AppleTV3,1',
      protovers: '1.0'
    };

    var body = plist.build(options);

    res.setHeader('Content-Type', 'text/x-apple-plist+xml');
    res.setHeader('Content-Length', body.length);
    res.end(body);
  };
};
