require.config({
    paths: {
        "jquery": "js/vendor/jquery/dist/jquery",
        "underscore": "js/vendor/underscore/underscore",
        "backbone": "js/vendor/backbone/backbone",

        "movie": "/models/movies",
        "movieCollection": "/collections/movieCollection",
        "movieView": "/views/movieView",
        "moviesView": "/views/moviesView"
    }
});

require(['jquery', 'movieView', 'moviesView'], function($, MovieView, MoviesView) {
    // var movieView = new MovieView({
    //     //el: $('.movies') //For list
    //     el: $('.singleMovie')
    // });
    new MoviesView();
    //movieView.getMovie();
});
