(function () {
    'use strict';

    // Create the module and define its dependencies.
    var app = angular.module('app', [
        // Angular modules
        'ui.router',
        'ngAnimate'
    ]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("show");
        $stateProvider
          .state('repeat', {
              url: "/repeat",
              templateUrl: "repeat.html",
              controller: 'repeatController'
          }).state('view', {
              url: "/view",
              templateUrl: "view.html",
              controller: 'viewController'
          }).state('show', {
              url: "/show",
              templateUrl: "show.html",
              controller: 'showController'
          });
    });

    app.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();