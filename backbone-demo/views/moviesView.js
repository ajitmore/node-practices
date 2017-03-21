define(['backbone', 'underscore', 'movieCollection'], function(Backbone, _, MovieCollection) {
    'use strict';
    var movieView = Backbone.View.extend({
        defaults: {},
        template: _.template($('#profileTemplate').html()),
        initialize: function() {
            console.log('Loaded');
            this.getMovies();
        },

        el: $('.movies'),
        render: function() {
            _.each(this.model.models, function(movie) {
                var profileTemplate = this.template(movie.toJSON());
                $(this.$el).append(profileTemplate);
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
