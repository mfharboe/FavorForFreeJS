'use strict';

angular.module('favorForFreeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('post', {
        url: '/post',
        templateUrl: 'app/post/post.html',
        controller: 'PostCtrl'
      })
      .state('comment', {
        url: '/post/:id',
        templateUrl: 'app/post/post.comment.html',
        controller: 'CommentCtrl',
        params: {id: null}
      });
  });