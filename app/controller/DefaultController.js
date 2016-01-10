GithubApp.controller('DefaultController', function($scope, $location, FirebaseService){
  $scope.visits = 0;
  $scope.test = 0;
  FirebaseService.addVisit();
  $scope.visits = Firebaseservice.getVisits();
});
