var gt = require('../lib/main');

var errfunc = function(e) { throw(e); }
var cb = function(o) { console.log(o); }

gt.gt().translate(errfunc, "was ist losy", cb);
