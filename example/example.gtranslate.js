var gt = require('../lib/main');

var errFunc = function(e) {
  throw(e);
}

var cb = function(o) {
  console.log(o);
}

gt.gt().translate(errFunc, "was ist losy", cb);
