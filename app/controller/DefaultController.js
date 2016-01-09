GithubApp.controller('DefaultController', function($scope, $location, FirebaseService, GithubService){
  GithubService.getRepos().success(function (data, status, headers, config) {
        $scope.repos = data;
        console.log(data);
    });
});
