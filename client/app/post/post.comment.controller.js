'use strict';

angular.module('favorForFreeApp')
  .controller('CommentCtrl', function ($scope, postService, $stateParams, $state) {
    $scope.post = undefined;
    $scope.postComments = [];
    $scope.postId = $stateParams.id;

    $scope.addcomment = function () {
      if ($scope.body === '') {
        return;
      }
      postService.createComment($stateParams.id, {
          comment: $scope.comment
        },
        function (callback) {
          $scope.post = callback;
          $scope.postComments = callback.comments;
          console.log(callback);

        });

      $scope.comment = '';
    };


    postService.find($stateParams.id, function (post) {
      $scope.post = post;
      $scope.postComments = post.comments;

    });
    
    $scope.addComment = function () {
        if (!$scope.comment || $scope.comment === '') {
            return;
        }
            postService.createComment($stateParams.id, {
                comment: $scope.comment    
            });                         
        };

    /*redirecting to profile with the authorId as stateparams for identification*/
    $scope.userDetails = function (authorId) {
      $state.go('profile', {
        'id': authorId
      });

    };


  });