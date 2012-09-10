# wd-gtranslate 

## Update node to latest

http://nodejs.org/#download

## Install

<pre>
npm install wd-gtranslate
</pre>

## Authors

  - Adam Christian ([admc](http://github.com/admc))
  
## License

  * License - Apache 2: http://www.apache.org/licenses/LICENSE-2.0

## Usage

<pre>
var gt = require('wd-gtranslate');

var errfunc = function(e) { throw(e); }
var cb = function(o) { console.log(o); }

gt.gt().translate(errfunc, "was ist losy", cb);
</pre>


