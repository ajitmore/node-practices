define(['backbone', 'underscore', 'movieCollection', 'movie'], function(Backbone, _, MovieCollection, Movie) {
    'use strict';
    var movieView = Backbone.View.extend({
        defaults: {},
        template: _.template($('#profileTemplate').html()),
        initialize: function() {
            console.log('Loaded');
        },

        el: $('.singleMovie'),
        events: {
            "click #btnEdit": "renderMovieUpdate",
            "click #btnUpdate": "updateMovie",
            "click #btnCancel": "renderMovie"
        },

        renderMovie: function() {
            var temp = _.template($('#movie').html());
            $(this.$el).html('');
            $(this.$el).append(temp(this.model.toJSON()));
            return this;
        },

        renderMovieUpdate: function() {
            var temp = _.template($('#movieEdit').html());
            $(this.$el).html('');
            $(this.$el).append(temp(this.model.toJSON()));
            return this;
        },

        getMovie: function() {
            var self = this;
            var movie = new Movie({
                _id: "58c7827ad23c8b33dbcaca09"
            });
            self.model = movie;
            movie.fetch().done(function() {
                self.renderMovie();
            });
        },

        updateMovie: function() {
            var self = this;
            this.model.save(JSON.stringify(this.model)).done(function() {
                self.getMovie();
            });
        }
    });

    return movieView;
});
