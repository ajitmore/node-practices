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
            "click #btnCancel": "renderMovies",
            "click #btnSave": "addMovie",
            "click #btnDelete": "deleteMovie",
        },

        setModel: function(ref) {
            ref.stopImmediatePropagation();
            if (this.model) {
                this.model.set(ref.target.id, ref.target.value);
            }
        },

        renderUpdate: function(e) {
            e.stopPropagation();
            this.getMovie($(e.target).attr('data-id'));
        },

        renderAdd: function() {
            $(this.$el).html('');
            var temp = _.template($('#movieAdd').html());
            $(this.$el).append(temp());
            //this.showAddButtons();
            return this;
        },

        showAddButtons: function() {
            this.$el.find('#btnUpdate').hide();
            this.$el.find('#btnDelete').hide();
        },

        showUpdateButtons: function() {
            this.$el.find('#btnSave').hide();
        },

        render: function() {
            $(this.$el).html('');
            _.each(this.collection.models, function(movie) {
                var temp = _.template($('.movieTemplate').html());
                $(this.$el).append(temp(movie.toJSON()));
            }, this);

            return this;
        },

        renderMovies: function(e) {
            e.stopImmediatePropagation();
            return this.render();
        },

        renderMovieUpdate: function() {
            var temp = _.template($('#movieEdit').html());
            $(this.$el).html('');
            $(this.$el).append(temp(this.model.toJSON()));
            //this.showUpdateButtons();
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
            self.collection = self.model = movies;
            movies.fetch({
                success: function() {
                    self.render();
                }
            });
        },

        //This function to update collection object locally instead of making another server call
        setMovies: function(obj) {
            _.extend(_.findWhere(this.collection, {
                _id: obj.get('_id')
            }), obj);
        },

        addMovie: function(e) {
            e.stopImmediatePropagation();
            var self = this;
            var name = this.$el.find("#Name").val(),
                rating = this.$el.find("#Rating").val(),
                director = this.$el.find("#Director").val(),
                type = this.$el.find("#Type").val(),
                releasedDate = this.$el.find("#ReleasedDate").val();
            var movie = this.collection.create({
                Name: name,
                Rating: rating,
                Director: director,
                Type: type,
                ReleasedDate: releasedDate
            }, {
                wait: true,
                success: function(resp) {
                    self.getMovies();
                }
            });
        },

        updateMovie: function(e) {
            e.stopPropagation();
            var self = this;
            this.model.save(JSON.stringify(this.model)).done(function() {
                self.getMovies();
                //self.setMovies(self.model); // To update collection locally
            });
        },

        deleteMovie: function(e) {
            e.stopPropagation();
            var self = this;
            this.model.destroy().done(function() {
                self.getMovies();
            })
        }
    });

    return movieView;
});
