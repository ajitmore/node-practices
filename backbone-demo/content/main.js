require.config({
    paths: {
        "jquery": "js/vendor/jquery/dist/jquery",
        "underscore": "js/vendor/underscore/underscore",
        "backbone": "js/vendor/backbone/backbone",

        "movie": "/models/movies",
        "movieCollection": "/collections/movieCollection",
    }
});

require(['../views/movieView'], function(appView) {
    new appView({
        el: $("#movieList")
    });
});
