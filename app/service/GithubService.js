GithubApp.service('GithubService', function($http){

	this.getRepos = function(){
	return $http.get('https://api.github.com/users/hanranti/repos');
	}
});
