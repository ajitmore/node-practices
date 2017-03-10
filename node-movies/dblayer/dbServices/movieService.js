(function(movieService) {
    'use strict';

    var service = require('./commonService'),
        Movie = require('../models/movies'),
        movieObj;

    movieService.add = function(obj, next) {
        movieObj = new Movie(obj);
        debugger;
        service.insert(movieObj, next);
    };

    movieService.get = function(name, next) {
        var params = {};
        if (name) {
            params = {
                Name: name
            };
        }
        debugger;
        service.get(Movie, params, next);
    };

    movieService.update = function(id, obj, next) {
      debugger;
        service.update(id, Movie, obj, next);
    };

    movieService.remove = function(id, next) {
      debugger;
      service.remove(id, Movie, next);
    }

})(module.exports);
