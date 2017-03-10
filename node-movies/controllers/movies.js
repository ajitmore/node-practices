(function(movies) {
    'use strict';

    movies.init = function(app) {
        var config = app.get('config'),
            movieService = require(dbBasePath + 'dbServices/movieService');

        app.get('/api/movies/:name?', function(req, res) {
            movieService.get(req.params.name, function(err, response) {
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

        //58be4bb3677b7b660a9036f4
        app.put('/api/movie/:id', function(req, res) {
            movieService.update(req.params.id, req.body, function(err, response) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(response);
                }
            });
        });

        //58be4bb3677b7b660a9036f4
        app.delete('/api/movie/:id', function(req, res) {
            movieService.remove(req.params.id, function(err, response) {
              debugger;
                if (err) {
                    res.send(err);
                } else {
                    res.send(response);
                }
            });
        });
    };

})(module.exports);
