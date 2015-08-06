
    angular.module('app').animation('.slide', [function() {
      return {
        // make note that other events (like addClass/removeClass)
        // have different function input parameters
        enter: function(element, doneFn) {
          $(element).slideDown(1000, doneFn);
        },
        addClass : function(element, className, done) {
            if(className == 'ng-hide') {
                $(element).slideUp(1000, done);
            }
            else {
                $(element).slideDown(1000, done);
            }
            return function onEnd(element, done) { };
        }
      };
    }]);