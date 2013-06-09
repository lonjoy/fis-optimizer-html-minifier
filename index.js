/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var minify = require('html-minifier').minify;

module.exports = function(content, file, conf){
    return minify(content, conf);
};

module.exports.defaultOptions = {
    removeComments:                true,
    removeCommentsFromCDATA:       true,
//    removeCDATASectionsFromCDATA:  true,
    collapseWhitespace:            true,
    collapseBooleanAttributes:     true,
    removeAttributeQuotes:         true,
    removeRedundantAttributes:     true,
    useShortDoctype:               true,
    removeEmptyAttributes:         true,
//    removeEmptyElements:           true,
//    removeOptionalTags:            true,
    removeScriptTypeAttributes:    true,
    removeStyleLinkTypeAttributes: true
};
