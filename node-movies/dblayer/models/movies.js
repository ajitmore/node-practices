'use strict';

var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    Name: {
        type: String,
        default: '',
        required: [true, 'Movie name is required']
    },
    Rating: {
        type: String,
        default: ''
    },
    Type: {
        type: Number,
        default: '',
        enum: [1, 2, 3, 4, 5, 6],
        required: [true, 'Movie type is required']
    },
    Director: {
        type: String,
        default: '',
        required: [true, 'Director name is required']
    },
    ReleasedDate: {
        type: Date,
        required: [true, 'Release date is required']
    },
    CreatedDate: {
        type: Date,
        default: Date.now
    },
    ModifiedDate: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('Movie', movieSchema);
