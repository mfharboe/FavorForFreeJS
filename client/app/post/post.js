'use strict';

angular.module('favorForFreeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('post', {
        url: '/post',
        templateUrl: 'app/post/post.html',
        controller: 'PostCtrl'
      });
  });