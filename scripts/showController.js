(function () {
    'use strict';

    angular.module('app').controller('showController',
        ['$scope', showController]);

    function showController($scope) {
        $scope.showSlideContent = false;
    }
})();