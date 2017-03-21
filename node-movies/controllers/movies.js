(function(movies) {
    'use strict';

    movies.init = function(app) {
        var config = app.get('config'),
            movieService = require(dbBasePath + 'dbServices/movieService');

        app.get('/api/movies/', function(req, res) {
            movieService.get(function(err, response) {
                res.send(response);
            });
        });

        app.get('/api/movies/:id', function(req, res) {
            movieService.getById(req.params.id, function(err, response) {
                res.send(response);
            });
        });

        app.post('/api/movies/', function(req, res) {
            if (req.body) {
                movieService.add(req.body, function(err, status) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(status);
                    }
                })
            }
        });

        //58c77f622b5eb630639345ea
        app.put('/api/movies/:id', function(req, res) {
            movieService.update(req.params.id, req.body, function(err, response) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(response);
                }
            });
        });

        //58c77f622b5eb630639345ea
        app.delete('/api/movies/:id', function(req, res) {
            movieService.remove(req.params.id, function(err, response) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(response);
                }
            });
        });
    };

})(module.exports);
