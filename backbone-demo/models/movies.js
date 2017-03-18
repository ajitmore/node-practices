define(['backbone'], function(Backbone) {
    'use strict';
    var movie = Backbone.Model.extend({
        defaults: {
            ID: "",
            Name: "",
            Rating: "",
            Type: "",
            Director: "",
            ReleasedDate: "",
            CreatedDate: "",
            ModifiedDate: ""
        },
        idAttribute: "ID",
        initialize: function() {
            console.log('The model is initiated');
        },
        constructor: function(attributes, options) {
            console.log('The constructor had been called');
            Backbone.Model.apply(this, arguments);
        },
        validate: function(attr) {
            if (attr.Name.length < 1) {
                return "Please enter Movie name";
            }
        },
        urlRoot: 'http://localhost:1331/api/movies'
    });

    return movie;
});
