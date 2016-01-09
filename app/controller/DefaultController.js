GithubApp.controller('DefaultController', function($scope, $location, FirebaseService, GithubService){
  FirebaseService.addVisit();
});
