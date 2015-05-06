'use strict';

angular.module('favorForFreeApp')
  .controller('ProfileCtrl', function ($scope, profileService, $stateParams, Auth) {
    $scope.profile = 'undefined';



    profileService.find($stateParams.id, function (profile) {
      console.log(profile.image);
      $scope.profile = profile;



    });
  });