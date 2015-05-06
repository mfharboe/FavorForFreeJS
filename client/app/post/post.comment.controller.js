'use strict';

angular.module('favorForFreeApp')
  .controller('CommentCtrl', function ($scope, postService, $stateParams, $state) {
    $scope.post = undefined;
    $scope.postComments = [];
    $scope.user = 'undefined';

    postService.find($stateParams.id, function (post) {
      $scope.post = post;
      $scope.postComments = post.comments;
    });

    /*redirecting to profile with the authorId as stateparams for identification*/
    $scope.userDetails = function (authorId) {
      console.log("do i click?");
      console.log("do i have author id?" + authorId);
      $state.go('profile', {
        'id': authorId
      });

    };



  });