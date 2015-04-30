'use strict' 

angular.module('favorForFreeApp')
.factory('postsService',function($http){
			var service = {};
			service.list = function(callback){
				$http.get('/api/posts').success(callback);
			};

			service.delete = function(_id, callback){ 	
				$http.delete('/api/posts/' + _id).
				success(function(data, status, headers, config) {
					service.list(callback);
				});
			};
	
			service.find = function(_id, callback){ 	
				$http.get('/api/posts/'+_id).success(callback);
			};
    
            service.create = function(post, callback){
            $http.post('/api/posts/', post).success(function(data, status, headers, config){
            service.list(callback);
            });
            };
    
            service.createComment = function(id, comment, callback){
            $http.post('api/posts/' + id + '/comments', comment).success(function(data, status, headers, config){
            service.find(id, callback);
            });
            };
    
    
			return service;
  });