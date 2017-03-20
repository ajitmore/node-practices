define(['backbone', 'underscore', 'movieCollection', 'movie'], function(Backbone, _, MovieCollection, Movie) {
    'use strict';
    var movieView = Backbone.View.extend({
        defaults: {},
        template: _.template($('#profileTemplate').html()),
        initialize: function() {
            console.log('Loaded');
        },
        render: function() {
            _.each(this.model.models, function(movie) {
                var profileTemplate = this.template(movie.toJSON());
                $(this.$el).append(profileTemplate);
            }, this);

            return this;
        },

        renderMovie: function() {
            var temp = _.template($('#movie').html());
            $(this.$el).append(temp(this.model.toJSON()));
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
        },

        getMovie: function() {
            var self = this;
            var movie = new Movie({
                _id: "58c7827ad23c8b33dbcaca09"
            });
            self.model = movie;
            movie.fetch({
                success: function() {
                    self.renderMovie();
                }
            })
        }
    });

    return movieView;
});
