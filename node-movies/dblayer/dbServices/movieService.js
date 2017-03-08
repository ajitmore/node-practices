(function(movieService) {
    'use strict';

    var service = require('./commonService'),
        Movie = require('../models/movies'),
        movieObj;

    movieService.add = function(obj, next) {
        movieObj = new Movie(obj);
        service.insert(movieObj, next);
    };

    movieService.get = function(name, next) {
        var params = {};
        if (name) {
            params = {
                Name: name
            };
        }
        service.get(Movie, params, next);
    };

})(module.exports);
