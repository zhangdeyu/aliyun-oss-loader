/*
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

    if (options.domain) {
        var path = options.domain + filename;
        if (options.domain.indexOf('http') === -1) {
            path = (options.https ? 'https://' : 'http://') + path;
        }
        return 'module.exports = ' + JSON.stringify(path);
    }

    return 'module.exports = ' + JSON.stringify((options.https ? 'https://' : 'http://') + options.bucket + '.' + options.region + '.aliyuncs.com/' + filename);
};

module.exports.raw = true;