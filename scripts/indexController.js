(function () {
    'use strict';

    angular.module('app').controller('indexController',
        ['$scope', 'indexService', indexController]);

    function indexController($scope, indexService) {
        console.log('controller');
        $scope.service = indexService;
    }
})();