(function() {

  var app = angular.module("gitHubViewer", []);

  var MainController = function($scope, $http) {
    $scope.message = "Hello!";

    // $http.get("https://api.github.com/users/angular").then(function(success) {
    //   $scope.user = success.data;
    // }, function(error) {
    //   $scope.error = "Error! couldn't fetch the user!";
    // });
    // $scope.userName = "Angular";


    $scope.search = function(username) {
      $http.get("https://api.github.com/users/" + $scope.userName).then(function(success) {
        $scope.user = success.data;
        $http.get($scope.user.repos_url).then(onRepos, onError);

      }, onError);
    };

    var onRepos = function(response) {
      $scope.repos = response.data;
    };

    var onError = function() {
      $scope.error = "Couldn't fetch the data";
    };
    $scope.userName = 'angular';
    $scope.repoSortOrder = '-stargazers_count';
  };

  app.controller("MainController", ["$scope", "$http", MainController]);

}());