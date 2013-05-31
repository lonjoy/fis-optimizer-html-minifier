/*
 * fis
 * http://web.baidu.com/
 */

'use strict';

var minify = require('html-minifier').minify;

module.exports = function(content, file, conf){
    return minify(content, conf);
};

module.exports.conf = {
    removeCommentsFromCDATA : true,
    collapseWhitespace : true,
    collapseBooleanAttributes : true,
    removeAttributeQuotes : true,
    removeRedundantAttributes : true,
    useShortDoctype : true,
    removeEmptyAttributes : true,
    removeOptionalTags : true,
    removeScriptTypeAttributes : true,
    removeStyleLinkTypeAttributes : true
};