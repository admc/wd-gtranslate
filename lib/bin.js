#!/usr/bin/env node

var argv = require('optimist').argv;
var gt = require('../lib/main');

if (argv.text) {
  var errFunc = function(e) {
    throw(e);
  }

  var cb = function(o) {
    console.log(o);
  }

  gt.gt().translate(errFunc, argv.text, cb);
}
else {
  console.log("Please some text..");
}

