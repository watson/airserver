'use strict';

var mdns = require('mdns');
var common = require('common');
var getmac = require('getmac');
var service = require('./_service');

module.exports = function (port) {
  var options = {
    txtRecord: {
      // txtvers: '1',
      // ch: '2',
      // cn: '0,1',
      // ek: '1',
      // et: '0,1',
      // sv: 'false',
      // da: 'true',
      // sr: '44100',
      // ss: '16',
      // pw: 'false',
      // vn: '65537',
      // tp: 'TCP,UDP',
      // vs: '105.1',
      // am: 'AirPort4,107',
      // fv: '76400.10',
      // sf: '0x0'
      txtvers: '1',     // TXT record version 1
      ch: '2',          // audio channels: stereo
      // cn: '0,1,2,3',    // audio codecs
      cn: '0,1',        // audio codecs
      ek: '1',          // ?
      // et: '0,3,5',      // supported encryption types
      et: '0,1',        // supported encryption types
      sv: 'false',      // ?
      da: 'true',       // ?
      sr: '44100',      // audio sample rate: e.g. 44100 Hz
      ss: '16',         // audio sample size: e.g. 16-bit
      pw: 'false',      // does the speaker require a password?
      vn: '65537',      // ?
      // tp: 'UDP',       // supported transport: TCP or UDP
      tp: 'TCP,UDP',    // supported transport: TCP or UDP
      // vs: '130.14',     // server version
      vs: '105.1',      // server version
      // am: 'AppleTV2,1', // device model
      am: 'AirPort4,107', // device model
      fv: '76400.10',   // ?
      // md: '0,1,2',      // supported metadata types
      // sf: '0x4'         // ?
      sf: '0x0'         // ?
    }
  };

  service('RAOP', port, options);
};
