(function(authorization) {
    'use strict';

    authorization.authorize = function(req, res, next) {
        debugger;
        console.log('This is authorization');
        next();
    };
})(module.exports);
