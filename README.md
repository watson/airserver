# AirServer

The aim of the project is to create a complete reference implementation of the entire AirPlay protocol universe in Node.js.

**This is very much work-in-progress :)** So much so that - to be honest - you most likely do not want to use this module at all. Instead I encurage you to take a look at my more low-level AirPlay modules. I keep an up-to-date list of them here: https://gist.github.com/watson/50e46a6085ffc805d326

[![Build status](https://travis-ci.org/watson/airserver.svg?branch=master)](https://travis-ci.org/watson/airserver)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Usage Example

```javascript
var airserver = require('airserver')('Picture Frame');

airserver.on('photo', function (stream) {
  // frame it!
});
```
