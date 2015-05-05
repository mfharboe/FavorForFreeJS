'use strict';

angular.module('favorForFreeApp')
  .controller('CommentCtrl', function ($scope, postService, $stateParams) {
    $scope.post = undefined;
    $scope.postComments = [];

    postService.find($stateParams.id, function (post) {
      $scope.post = post;
      $scope.postComments = post.comments;
    });
  });