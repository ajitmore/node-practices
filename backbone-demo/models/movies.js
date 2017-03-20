define(['backbone'], function(Backbone) {
    'use strict';
    var movie = Backbone.Model.extend({
        defaults: {
            _id: "",
            Name: "",
            Rating: "",
            Type: "",
            Director: "",
            ReleasedDate: "",
            CreatedDate: "",
            ModifiedDate: ""
        },
        idAttribute: "_id",
        initialize: function(name) {
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
        parse: function(response) {
            return JSON.parse(response.data);
        },
        urlRoot: 'http://localhost:1333/api/movies'
    });

    return movie;
});
