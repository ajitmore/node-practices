define(['backbone', 'movie'], function(Backbone, Movie) {
    'use strict';
    var movieCollection = Backbone.Collection.extend({
        initialize: function() {
          console.log('This is movie collection');
        },
        model: Movie,
        url: 'http://localhost:1333/api/movies'
    });

    return movieCollection;
});
