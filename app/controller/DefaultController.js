GithubApp.controller('DefaultController', function($scope, $location, FirebaseService, GithubService){
  $scope.visits = 0;
  FirebaseService.addVisit();
  $scope.visits = Firebaseservice.getVisits();
});
