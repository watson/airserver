'use strict';

var airserver = require('../')();

airserver.on('request', function (req, res) {
  console.log('Processing incoming request...');
  var buffers = [];
  req.on('data', buffers.push.bind(buffers));
  req.on('end', function () {
    res.end();
    console.log(req.method, req.url);
    console.log(req.headers);
    if (buffers.length) console.log(Buffer.concat(buffers).toString());
  });
});

console.log('Starting AirServer...');
airserver.listen(function () {
  var port = airserver.address().port;
  console.log('AirServer listening on port', port);
});
