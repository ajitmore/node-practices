angular.module('movieApp').service('movieService', ['$resource', function($resource) {
    return $resource('http://localhost:1333/api/movies/:id', {
        id: '@_id'
    }, {
        query: {
            transformResponse: function(data, header) {
                debugger;
            }
        }
    });
}])
