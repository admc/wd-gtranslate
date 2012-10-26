var sauce = require('sauce');
var wdSync = require('wd-sync');

var gt = module.exports = function(args) {

  this.desired = {
    platform: "LINUX",
    name: "Google Translate",
    browserName: "chrome"
  };

  try {
    this.desired.username = sauce.sauce().creds().username;
    this.desired.accessKey = sauce.sauce().creds().accessKey;
    this.server = "ondemand.saucelabs.com";
    this.port = 80;
  } catch(err) {
    this.server = "localhost";
    this.port = 4444;
  }

}

gt.prototype.translate = function(err, text, cb) {
  var _this = this;

  if (!text) {
    err(new Error("Please provide text to translate"));
    return;
  }

  var client = wdSync.remote(_this.server, _this.port)
      , browser = client.browser
      , sync = client.sync;

  sync( function() {

    browser.init(_this.desired);
    browser.setImplicitWaitTimeout(3000);
    browser.get("http://translate.google.com");

    var source = browser.elementById('source');
    browser.type(source, text);

    browser.waitForCondition("document.getElementsByClassName('hps')[0] != 'undefined'");

    var out = browser.elementById('result_box');
    textOut = browser.text(out);

    var lang = browser.elementByClassName('goog-toolbar-button-checked');
    langText = browser.text(lang);

    var suggestions = browser.elementById('spelling-correction');
    suggestionText = browser.text(suggestions);

    browser.quit();

    var resObj = {"input": text
                  , "output": textOut
                  , "language": langText
                  , "suggestion": suggestionText };

    cb(resObj);
  });
}
