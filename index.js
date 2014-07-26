'use strict';

var airserver = require('./lib/airserver')();

require('./lib/raop')(airserver);
require('./lib/airplay')(airserver);

airserver.listen();
