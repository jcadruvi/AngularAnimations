(function () {
    'use strict';

    angular.module('app').controller('repeatController',
        ['$scope', repeatController]);

    function repeatController($scope) {
        $scope.showSlideContent = false;
    }
})();
