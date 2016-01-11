
GithubApp.service('FirebaseService', function($firebaseObject){
 var firebaseRef = new Firebase('https://hanranti.firebaseio.com/visits');
 var visits = $firebaseObject(firebaseRef);

 visits.$save(0);

this.addVisit = function(){
 visits++;
}
this.getVisit = function(){
 return visits;
}
});
