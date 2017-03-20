require.config({
    paths: {
        "jquery": "js/vendor/jquery/dist/jquery",
        "underscore": "js/vendor/underscore/underscore",
        "backbone": "js/vendor/backbone/backbone",

        "movie": "/models/movies",
        "movieCollection": "/collections/movieCollection",
        "movieView": "/views/movieView"
    }
});

require(['jquery', '../views/movieView'], function($, MovieView) {
    var movieView = new MovieView({
        //el: $('.movies') //For list
        el: $('.singleMovie')
    });
    //movieView.getMovies(); //For list
    movieView.getMovie();
});
