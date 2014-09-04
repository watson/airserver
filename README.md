# AirServer

Node.js AirPlay server.

This is very much work-in-progress :)

## Usage Example

```javascript
var airserver = require('airserver')('Picture Frame');

airserver.on('photo', function (stream) {
  // frame it!
});
```
