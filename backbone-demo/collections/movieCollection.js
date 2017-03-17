'use strict';
var Movie = require('./models/movies');
var movieCollection = Backbone.Collection.extend({
    model: Movie,
    url: 'http://localhost:1331/api/movies'
});
return movieCollection;
