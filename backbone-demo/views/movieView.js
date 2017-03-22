define(['backbone', 'underscore', 'movieCollection', 'movie'], function(Backbone, _, MovieCollection, Movie) {
    'use strict';
    var movieView = Backbone.View.extend({
        defaults: {},
        template: _.template($('.profileTemplate').html()),
        initialize: function() {
            console.log('Loaded');
        },

        events: {
            "change input[type=text]": "setModel",
            "click #btnEdit": "renderMovieUpdate",
            "click #btnUpdate": "updateMovie",
            "click #btnCancel": "renderMovie"
        },

        setModel: function(ref) {
            this.model.set(ref.target.id, ref.target.value);
        },

        renderMovie: function() {
            var temp = _.template($('.profileTemplate').html());
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
