console.log("app.js");
var GithubApp = angular.module('hanranti', ['ngRoute']);

GithubApp.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'DefaultController',
                templateUrl: 'app/views/Default.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});

GithubApp.config(['$httpProvider', function($httpProvider) {
  delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);
