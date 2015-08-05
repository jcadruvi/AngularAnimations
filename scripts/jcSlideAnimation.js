(function () {
    'use strict';

    angular.module('app').animation('.slide', [function() {
      return {
        // make note that other events (like addClass/removeClass)
        // have different function input parameters
        add: function(element, doneFn) {
          jQuery(element).slideDown(1000, doneFn);
        },
        remove: function(element, doneFn) {
          jQuery(element).slideUp(1000, doneFn);
        }
      };
    }]);

})();