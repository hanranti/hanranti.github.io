console.log("app.js");
var GithubApp = angular.module('hanranti', ['ngRoute']);

GithubApp.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'DefaultController',
                templateUrl: 'app/views/Default.html'
            }).when('/repos/', {
                controller: 'ReposController',
                templateUrl: 'app/views/repos.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});

GithubApp.config(['$httpProvider', function($httpProvider) {
  delete $httpProvider.defaults.headers.common["X-Requested-With"]
}]);

GithubApp.run(function($rootScope, GithubService){
  GithubService.getUser().success(function (data, status, headers, config) {
       $rootScope.user = data;
    });
});
