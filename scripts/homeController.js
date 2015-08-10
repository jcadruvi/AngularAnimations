(function () {
    'use strict';

    angular.module('app').controller('homeController',
        ['$scope', 'homeService', homeController]);

    function homeController($scope, homeService) {
        $scope.service = homeService;
    }
})();