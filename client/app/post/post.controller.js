'use strict';

angular.module('favorForFreeApp')
    .controller('PostCtrl', function ($scope, postService, $state) {
    
        $scope.posts = [];

        postService.list(function (posts) {
            $scope.posts = posts;
        });

        $scope.details = function (_id) {
            $state.go('comment', {id: _id})
        };

    /**
    todo list/ mangler til addPost:
    authorId
    authorName
    isHelper
    isOpen
    */
  $scope.addPost = function(){
 if(!$scope.title || $scope.title === '') { return; }
  console.log('addPost --------!!!!!!!!!!!!');
  postService.create({title: $scope.title, description: $scope.description, zip: $scope.zip}, function(posts){
  $scope.posts = posts;
  });
        
  $scope.title = '';
  
  };
});