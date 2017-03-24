define(['backbone', 'underscore', 'movieCollection', 'movieView'], function(Backbone, _, MovieCollection, MovieView) {
    'use strict';
    var moviesView = Backbone.View.extend({
        defaults: {},
        initialize: function() {
            console.log('Loaded');
            this.getMovies();
        },
        el: $('.movies'),

        events: {
            //"click .btnEdit": "renderUpdate"
        },

        renderUpdate: function(e) {
            e.stopPropagation();
            var movie = new MovieView({
                el: $('.singleMovie'),
                id: $(e.target).attr('data-id'),
                collection: this.model
            });
            movie.getMovie();
        },

        render: function() {
            _.each(this.model.models, function(movie) {
                // var movie = new MovieView({
                //     model: movie,
                //     el: $('.movies')
                // });
                // $(this.$el).append(movie.renderMovie());
                var temp = _.template($('.movieTemplate').html());
                $(this.$el).append(temp(movie.toJSON()));
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

    return moviesView;
});
