(function () {
    'use strict';

    angular.module('app').controller('viewController',
        ['$scope', viewController]);

    function viewController($scope) {
        $scope.showSlideContent = false;
    }
})();
