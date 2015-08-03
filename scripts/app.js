(function () {
    'use strict';

    // Create the module and define its dependencies.
    var app = angular.module('app', [
        // Angular modules
        'ui.router'
    ]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        console.log('app');
        $stateProvider
          .state('home', {
              url: "/",
              template: "<div>This is a test</div>"
        });
    });
})();