angular.module('movieApp').controller('movieController', ['$scope', 'movieService', function($scope, movieService) {

    $scope.getMovies = function() {
        $scope.movies = movieService.query();
    };
    // 
    // $scope.movies = function() {
    //     return
    // }

    $scope.movie = function(id) {
        return movieService.get({
            _id: id
        });
    };

    $scope.addMovie = function() {
        return movieService.$save();
    };

    $scope.updateMovie = function() {
        return movieService.$save({
            _id: $scope.movie._id
        });
    };

    $scope.deleteMovie = function() {
        return movieService.$update();
    };
}]);
