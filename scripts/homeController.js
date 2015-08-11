(function () {
    'use strict';

    angular.module('app').controller('homeController',
        ['$scope', homeController]);

    function homeController($scope) {
        $scope.showSlideContent = true;
    }
})();