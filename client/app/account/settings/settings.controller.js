'use strict';

angular.module('favorForFreeApp')
  .controller('SettingsCtrl', function ($scope, User, Auth, profileService, $stateParams, $location, $state, $http) {
    $scope.errors = {};
    $scope.profile = Auth.getCurrentUser();
    $scope.options = [{
      name: "male",
      id: 0
    }, {
      name: "female",
      id: 1
    }];


    $scope.selectedOption = $scope.options[$scope.profile.sex];

    $scope.update = function () {
      $scope.profile.sex = $scope.selectedOption.id;
      profileService.update($scope.profile, function (profile) {
        $state.go('main');
      });
    };


    $scope.changePassword = function (form) {
      $scope.submitted = true;
      console.log("am i hitting this?");
      if (form.$valid) {
        Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword)
          .then(function () {
            $scope.message = 'Password successfully changed.';
          })
          .catch(function () {
            form.password.$setValidity('mongoose', false);
            $scope.errors.other = 'Incorrect password';
            $scope.message = '';
          });
      }
    };
  });