'use strict';

var mdns = require('mdns');
var common = require('common');
var getmac = require('getmac');

module.exports = function (type, port, options) {
  common.step([
    function (next) {
      getmac.getMac(next);
    },
    function (mac) {
      mac = mac.toUpperCase().replace(/:/g, '');
      options.name = mac + '@Node.js';
      console.log('Starting %s server with name %s...', type, options.name);
      var ad = mdns.createAdvertisement(mdns.tcp(type.toLowerCase()), parseInt(port, 10), options);
      ad.start();
    }
  ], function (err) {
    throw err;
  });
};
