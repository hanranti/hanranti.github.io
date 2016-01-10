GithubApp.controller('DefaultController', function($scope, $location){
  $scope.visits = 0;
  $scope.test = 0;
  FirebaseService.addVisit();
  
});
