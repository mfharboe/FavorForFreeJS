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
    });