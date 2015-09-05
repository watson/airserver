# AirServer

Node.js AirPlay server.

This is very much work-in-progress :)

[![Build status](https://travis-ci.org/watson/airserver.svg?branch=master)](https://travis-ci.org/watson/airserver)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Usage Example

```javascript
var airserver = require('airserver')('Picture Frame');

airserver.on('photo', function (stream) {
  // frame it!
});
```
