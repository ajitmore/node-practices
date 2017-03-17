require.config({
    paths: {
        "jquery": "js/vendor/jquery/dist/jquery",
        "underscore": "js/vendor/underscore/underscore",
        "backbone": "js/vendor/backbone/backbone"
    }
});

require(['../views/movieView'], function(appView) {
    return new appView({el: $('#movieList')});
});
