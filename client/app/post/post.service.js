'use strict' 

angular.module('favorForFreeApp')
    .factory('postService', function($http){
    var service = {};
    service.list = function (callback){
        $http.get('/api/posts').success(callback);
    };

    return service;
});