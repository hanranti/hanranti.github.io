
GithubApp.service('FirebaseService', function($firebaseObject){
 var firebaseRef = new Firebase('https://hanranti.firebaseio.com/');
 var data = $firebaseObject(firebaseRef);
});
