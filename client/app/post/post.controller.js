'use strict';

angular.module('favorForFreeApp')
  .controller('PostCtrl', function ($scope, postService, $state) {

    $scope.favorsNeeded = [];
    $scope.favorsGiven = [];
    
    postService.list(function (favors) {
           sorting(favors);
    });
    
    var sorting = function(favors) {
        favors.forEach(function (favor) {
        if(favor.isHelper){
                $scope.favorsGiven.push(favor);
           }
            else {
                $scope.favorsNeeded.push(favor);
            }
        });
    };

        $scope.details = function (_id) {
            $state.go('comment', {
                id: _id
            })
        };
    
        $scope.addPost = function (isHelper) {
            if (!$scope.title || $scope.title === '') {
                return;
            }
            if (!$scope.description || $scope.description === '') {
                return;
            }
            if (!$scope.zip || $scope.zip === '') {
                return;
            }
            postService.create({
                title: $scope.title,
                description: $scope.description,
                zip: $scope.zip,
                isHelper: isHelper
            }, function (favors) {
                $scope.favorsNeeded = [];
                $scope.favorsGiven = [];
                sorting(favors);
            });
            $scope.title = '';
            $scope.description = '';
            $scope.zip = '';
        };
    });
