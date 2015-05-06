'use strict'

angular.module('favorForFreeApp')
  .factory('profileService', function ($http, $location) {
    var service = {};


    service.find = function (_id, callback) {
      console.log("getting id " + _id);
      $http.get('/api/users/' + _id).success(callback);
      console.log(callback);
    };

    service.update = function (profile, callback) {

      $http.put('/api/users/update/' + profile._id, profile).success(function (data, status, headers, config) {
        service.find(profile._id, callback);
      });
    };
    return service;
  });