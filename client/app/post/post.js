'use strict';

angular.module('favorForFreeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('favors-given', {
        url: '/favors-given',
        templateUrl: 'app/post/favors-given.html',
        controller: 'PostCtrl'
      })
      .state('favors-needed', {
        url: '/favors-needed',
        templateUrl: 'app/post/favors-needed.html',
        controller: 'PostCtrl'
      })
      .state('comment', {
        url: '/post/:id',
        templateUrl: 'app/post/post.comment.html',
        controller: 'CommentCtrl',
        params: {id: null}
      });
  });