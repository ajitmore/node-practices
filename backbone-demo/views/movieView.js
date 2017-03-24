define(['backbone', 'underscore', 'movie', 'movieCollection'], function(Backbone, _, Movie, MovieCollection) {
    'use strict';
    var movieView = Backbone.View.extend({
        defaults: {},
        template: _.template($('#movieEdit').html()),
        initialize: function() {
            console.log('Loaded');
        },
        el: $('.movies'),

        events: {
            "change input[type=text]": "setModel",
            "click .btnEdit": "renderUpdate",
            "click #btnUpdate": "updateMovie",
            "click #btnCancel": "renderMovies"
        },

        setModel: function(ref) {
            this.model.set(ref.target.id, ref.target.value);
        },

        renderUpdate: function(e) {
            e.stopPropagation();
            this.getMovie($(e.target).attr('data-id'));
        },

        render: function() {
            $(this.$el).html('');
            this.collection = (this.collection) ? this.collection : this.model;
            _.each(this.collection.models, function(movie) {
                var temp = _.template($('.movieTemplate').html());
                $(this.$el).append(temp(movie.toJSON()));
            }, this);

            return this;
        },

        renderMovies: function(e) {
            e.stopPropagation();
            return this.render();
        },

        renderMovieUpdate: function() {
            var temp = _.template($('#movieEdit').html());
            $(this.$el).html('');
            $(this.$el).append(temp(this.model.toJSON()));
            return this;
        },

        getMovie: function(id) {
            var self = this;
            var movie = new Movie({
                _id: id
            });
            self.model = movie;
            movie.fetch().done(function() {
                self.renderMovieUpdate();
            });
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

        setMovies: function(obj) {
            _.extend(_.findWhere(this.collection, {
                _id: obj.get('_id')
            }), obj);
            debugger;
        },

        updateMovie: function(e) {
            e.stopPropagation();
            var self = this;
            this.model.save(JSON.stringify(this.model)).done(function() {
                self.getMovies();
                //self.setMovies();
            });
        }
    });

    return movieView;
});
