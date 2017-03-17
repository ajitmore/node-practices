(function(content) {
    'use strict';

    content.init = function(app) {
        var config = app.get('config'),
            router = app.get('router'),
            movieService = require(dbBasePath + 'dbServices/movieService');

        var getMovies = function(req, res) {
          movieService.get(req.params.name, function(err, response) {
              res.send(response);
          });
        };

        router
            .get('/content/movies/:name?', getMovies)
    };

})(module.exports);
