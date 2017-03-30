(function(nonAuthorize) {
    'use strict';

    nonAuthorize.common = function(req, res, next) {
        console.log('This is not authorization router');
        next();
    }
})(module.exports);
