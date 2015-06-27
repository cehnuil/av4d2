/**
 * main
 */

'use strict';

var app = require('./config/app')();
var port = process.env.PORT || 3000;

app.listen(port);