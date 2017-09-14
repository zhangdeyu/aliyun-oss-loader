/*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Derek
*/

var fs = require('fs');
var co = require('co');
var OSS = require('ali-oss');
var loaderUtils = require('loader-utils');

module.exports = function(content) {
    this.cacheable && this.cacheable();
    var options =  loaderUtils.getOptions(this) || {};

    var client = new OSS({
        region: options.region,
        bucket: options.bucket,
        accessKeyId: options.accessKeyId,
        accessKeySecret: options.accessKeySecret
    });

    var filename = loaderUtils.interpolateName(this, options.name ? options.name : '[name].[hash].[ext]', {content: content});

    co(function* () {
        var result = yield client.put(filename, new Buffer(content));
    }).catch(function (err) {
        console.log(err);
    });

    return 'module.exports = ' + JSON.stringify((options.https ? 'https://' : 'http://') + options.bucket + '.' + options.region + '.aliyuncs.com/' + filename);
};

module.exports.raw = true;
