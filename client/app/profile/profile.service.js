'use strict'

angular.module('favorForFreeApp')
    .factory('profileService', function ($http) {
        var service = {};

        service.find = function (_id, callback) {
            $http.get('/api/users/' + _id).success(callback);
        };
        return service;
    });