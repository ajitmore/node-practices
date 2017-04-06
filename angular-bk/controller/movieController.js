angular.module('movieApp').controller('movieController', ['$scope', 'movieService', function($scope, movieService) {

    $scope.getMovies = function() {
        movieService.query(function(data) {
            $scope.movies = JSON.parse(data.data);
        });
    };

    $scope.getMovie = function(_id) {
        movieService.get({
            id: _id
        }, function(data) {
            $scope.movie = JSON.parse(data.data);
            $scope.movie.ReleasedDate = new Date($scope.movie.ReleasedDate);
            $scope.isMoviePane = true;
        });
    };

    $scope.addMovie = function() {
        $scope.movie = new Object();
        $scope.isNew = $scope.isMoviePane = true;
    };

    $scope.saveMovie = function() {
        movieService.save($scope.movie, function() {
            scope.isMoviePane = false;
        });
    };

    $scope.updateMovie = function() {
        movieService.update({
            id: $scope.movie._id
        }, $scope.movie, function(data) {
            $scope.isMoviePane = false;
        });
    };

    $scope.deleteMovie = function() {
        movieService.delete({
            id: $scope.movie._id
        }, function() {
            $scope.isMoviePane = false;
        });
    };

    $scope.cancel = function() {
        $scope.isMoviePane = false;
    }
}]);
