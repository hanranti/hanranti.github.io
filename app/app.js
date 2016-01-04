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
