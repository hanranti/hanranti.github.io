GithubApp.controller('DefaultController', function($scope, $location, FirebaseService, GithubService){
  FirebaseService.addVisit();
  $scope.visits = Firebaseservice.getVisits();
});
