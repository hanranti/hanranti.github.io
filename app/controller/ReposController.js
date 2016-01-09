GithubApp.controller('ReposController', function($scope, GithubService){
  GithubService.getRepos().success(function (data, status, headers, config) {
        $scope.repos = data;
    });
});
