require.config({
    paths: {
        "jquery": "js/vendor/jquery/dist/jquery",
        "underscore": "js/vendor/underscore/underscore",
        "backbone": "js/vendor/backbone/backbone",

        "movie": "/models/movies",
        "movieCollection": "/collections/movieCollection",
        "movieView": "/views/movieView",
        "moviesView": "/views/moviesView",
        "movieController": "/controllers/movieController"
    }
});

//require(['jquery', 'movieView', 'moviesView'], function($, MovieView, MoviesView) {
require(['movieController'], function(MovieController) {
    (new MovieController()).getMovies();
    $('#btnAdd').click(function(e) {
        //e.stopPropagation();
        (new MovieController()).addMovie();
    });
});
