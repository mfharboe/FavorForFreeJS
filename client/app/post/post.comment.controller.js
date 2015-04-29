'use strict';

angular.module('favorForFreeApp')
  .controller('CommentCtrl', function ($scope, postService, $stateParams) {
    $scope.test = $stateParams.id;
  });