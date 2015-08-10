(function () {
    'use strict';

    angular.module('app').factory('homeService', homeService);

    function homeService() {
        var self = {};

        self.showContent = true;

        return self;
    }
})();
