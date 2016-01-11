GithubApp.controller('DefaultController', function($scope, $location, FirebaseService){
  FirebaseService.addVisit();
  $scope.visits = FirebaseService.getVisits();
});
