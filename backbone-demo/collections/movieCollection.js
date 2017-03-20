define(['backbone'], function(Backbone) {
    'use strict';
    var movieCollection = Backbone.Collection.extend({
        initialize: function() {
          console.log('This is movie collection');
        },
        parse: function(response) {
          return JSON.parse(response.data);
        },
        url: 'http://localhost:1333/api/movies'
    });

    return movieCollection;
});
