define(['backbone', 'underscore', 'movieCollection', 'movieView'], function(Backbone, _, MovieCollection, MovieView) {
    'use strict';
    var movieView = Backbone.View.extend({
        defaults: {},
        initialize: function() {
            console.log('Loaded');
            this.getMovies();
        },
        el: $('.movies'),
        events: {
            "click .btnEdit": "renderUpdate"
        },

        renderUpdate: function(ref) {
            debugger;
            var movie = new MovieView({
                el: $(ref.target).parents('.movie'),
                model: this.model
            });
            movie.renderMovieUpdate();
        },

        render: function() {
            _.each(this.model.models, function(movie) {
                var movie = new MovieView({
                    model: movie,
                    el: $('.movies')
                });
                $(this.$el).append(movie.renderMovie());
            }, this);

            return this;
        },

        getMovies: function() {
            var self = this;
            var movies = new MovieCollection();
            self.model = movies;
            movies.fetch({
                success: function() {
                    self.render();
                }
            });
        }
    });

    return movieView;
});
