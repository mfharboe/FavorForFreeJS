'use strict';

angular.module('favorForFreeApp')
  .controller('ProfileCtrl', function ($scope, profileService, $stateParams, Auth) {
    $scope.profile = 'undefined';
    $scope.sex = '';



    profileService.find($stateParams.id, function (profile) {
      console.log(profile.image);
      $scope.profile = profile;
      if (profile.sex == 0) {
        $scope.sex = 'male'
      } else if (profile.sex == 1) {
        $scope.sex = 'female'
      };



    });
  });