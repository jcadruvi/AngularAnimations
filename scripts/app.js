(function () {
    'use strict';

    // Create the module and define its dependencies.
    var app = angular.module('app', [
        // Angular modules
        'ui.router',
        'ngAnimate'
    ]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("home");
        $stateProvider
          .state('home', {
              url: "/home",
              templateUrl: "show.html",
              controller: 'homeController'
        });
    });

    app.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();