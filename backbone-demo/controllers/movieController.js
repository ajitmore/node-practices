define(['jquery', 'backbone', 'underscore', 'movieView', 'moviesView'], function($, Backbone, _, MovieView, MoviesView) {
    'use strict';
    var movieController = function() {
        this.getMovies = function() {
            (new MovieView()).getMovies();
        };

        this.addMovie = function() {
            (new MovieView()).renderAdd();
        }
    };
    return movieController;
});
