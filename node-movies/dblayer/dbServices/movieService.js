(function(movieService) {
    'use strict';

    var service = require('./commonService'),
        Movie = require('../models/movies'),
        movieObj;

    movieService.add = function(obj, next) {
        movieObj = new Movie(obj);
        service.insert(movieObj, next);
    };

    movieService.get = function(next) {
        service.get(Movie, next);
    };

    movieService.getById = function(id, next) {
        service.getById(Movie, id, next);
    };

    movieService.update = function(id, obj, next) {
        service.update(id, Movie, obj, next);
    };

    movieService.remove = function(id, next) {
        service.remove(id, Movie, next);
    }

})(module.exports);
