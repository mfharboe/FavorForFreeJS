'use strict';

angular.module('favorForFreeApp')
  .controller('PostCtrl', function ($scope, postService, $state) {

    $scope.posts = [];

    postService.list(function (posts) {
      $scope.posts = posts;
    });

        $scope.details = function (_id) {
            $state.go('comment', {
                id: _id
            })
        };
    
        $scope.addPost = function (isHelper) {
            if (!$scope.title || $scope.title === '') {
                return;
            }
            if (!$scope.description || $scope.description === '') {
                return;
            }
            if (!$scope.zip || $scope.zip === '') {
                return;
            }
            postService.create({
                title: $scope.title,
                description: $scope.description,
                zip: $scope.zip,
                isHelper: isHelper
            }, function (posts) {
                $scope.posts = posts;
            });
            $scope.title = '';
            $scope.description = '';
            $scope.zip = '';
        };
    });
