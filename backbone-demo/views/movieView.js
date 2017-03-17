//define(['backbone', '../collections/movieCollection'], function(Backbone, movieCollection) {
define(['backbone'], function(Backbone) {
    'use strict';
    var movieView = Backbone.View.extend({
        initilize: function() {
            console.log('Loaded');
        },
        tagname: "li",

        render: function() {
            this.$el.html('<li>Demo</li>');
            return this;
        }
    });
    return movieView;
});

// model: movieCollection,
// tagname: "li",
// render: function() {
//     this.$el.html('<li>Demo</li>');
//     return this;
// }
