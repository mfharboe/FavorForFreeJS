'use strict';

angular.module('favorForFreeApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('profile', {
                url: '/profile/:id',
                templateUrl: 'app/profile/profile.html',
                controller: 'ProfileCtrl',
                params: {
                    id: null
                }
            });
    });