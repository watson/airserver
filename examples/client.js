'use strict';

var mdns = require('mdns');

console.log('Listing all raop and airplay services on the network...');

mdns
  .browseThemAll()
  .on('serviceUp', function (service) {
    console.log('--> new service detected: %s.%s.%s', service.type.name, service.type.protocol, service.networkInterface);

    if (!~['raop', 'airplay'].indexOf(service.type.name)) return;

    var browser = mdns.createBrowser(mdns[service.type.protocol](service.type.name));

    browser.on('serviceUp', function (service) {
      console.log('-------------------------------------------');
      console.log('%s up:', service.type.name, service);
    });

    browser.start();
  })
  .start();

// mdns throws when an unexpected protocol is detected - this is dirty but unfortunately required:
process.on('uncaughtException', function (err) {
  console.log('ERROR:', err.message);
});
