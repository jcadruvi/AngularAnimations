(function () {
    'use strict';

    angular.module('app').factory('indexService', indexService);

    function indexService() {
        var self = {};

        self.showContent = false;

        return self;
    }
})();
