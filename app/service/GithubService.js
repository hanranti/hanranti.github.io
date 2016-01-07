GithubApp.service('GithubService', function($http){

	this.getRepos = function(){
	return $http.get();
	}
});
