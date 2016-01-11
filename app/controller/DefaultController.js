GithubApp.controller('DefaultController', function($scope, $location, FirebaseService){
  if(typeof(Storage) !== "undefined") {
        if (localStorage.visited) {
            FirebaseService.addVisit();;
        } else {
            localStorage.visited = true;
        }
  $scope.visits = FirebaseService.getVisits();
});
