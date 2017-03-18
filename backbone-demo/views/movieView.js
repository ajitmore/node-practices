define(['backbone', 'movieCollection'], function(Backbone, MovieCollection) {
    'use strict';
    var movieView = Backbone.View.extend({
        defaults: {},
        initialize: function() {
            console.log('Loaded');
            this.render();
            this.getMovies();
        },
        model: MovieCollection,
        tagname: "li",

        render: function() {
            this.$el.html('<li>Demo</li>');
            return this;
        },

        getMovies: function() {
          var movies = new MovieCollection();
          movies.fetch();
        }
    });

    return movieView;
});
