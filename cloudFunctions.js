var AV = require('cloudcode-nodejs-sdk');

/**
 * 一个简单的云代码方法
 */
AV.Cloud.define('hello', function(req, res) {
  if (req.params.name) {
    res.success('Hello~ ' + req.params.name);
  } else {
    res.success('Hello~ you are ...?');
  }
});

module.exports = AV.Cloud;