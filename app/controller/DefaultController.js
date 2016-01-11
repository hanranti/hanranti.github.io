GithubApp.controller('DefaultController', function($scope, $location){
  if(typeof(Storage) !== "undefined") {
        if (localStorage.visited) {
            $scope.visits++;
        } else {
            localStorage.visited = true;
            $scope.visits = 1;
        }
});
