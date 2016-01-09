
GithubApp.service('FirebaseService', function($firebaseObject){
 var firebaseRef = new Firebase('https://hanranti.firebaseio.com/visits');
 var visits = $firebaseObject(firebaseRef);

this.addVisit = function(){
 visits++;
}
this.getVisit = function(){
 return visits;
}
});
