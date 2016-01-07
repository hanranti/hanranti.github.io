
GithubApp.service('FirebaseService', function($firebaseObject){
 var firebaseRef = new Firebase('OMA_FIREBASE');
 var data = $firebaseObject(firebaseRef);
});
