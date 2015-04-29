'use strict';

angular.module('favorForFreeApp')
  .controller('PostCtrl', function ($scope, postService) {
    $scope.message = 'Hello';

    $scope.posts = [];
    
    postService.list(function(posts){
        $scope.posts = posts;
    });
  });
