/*
 * fis
 * http://web.baidu.com/
 */

'use strict';

var minify = require('html-minifier').minify;

module.exports = function(content, file, conf){
    return minify(content, conf);
};