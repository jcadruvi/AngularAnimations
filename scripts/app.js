(function () {
    'use strict';

    // Create the module and define its dependencies.
    var app = angular.module('app', [
        // Angular modules
        'ui.router'
    ]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("home");
        $stateProvider
          .state('home', {
              url: "/home",
              templateUrl: "home.html",
              controller: 'homeController'
        });
    });

    app.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();