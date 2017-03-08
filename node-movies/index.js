(function(index) {
    'use strict';

    index.init = function(app) {

        var fs = require('fs');
        fs.readdir(basePath + 'controllers', function(err, files) {
            files.forEach(function(file) {
                require(basePath + 'controllers/' + file).init(app);
            })
        })
    }
})(module.exports);
