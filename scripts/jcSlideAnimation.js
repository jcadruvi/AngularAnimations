
    angular.module('app').animation('.slide', [function() {
      return {
            beforeAddClass : function(element, className, done) {
                if(className == 'ng-hide') {
                    jQuery(element).slideUp(1000, done);
                }
                else {
                    done();
                }
            },
            removeClass : function(element, className, done) {
                if(className == 'ng-hide') {
                    jQuery(element).slideDown(1000, done);
                }
                else {
                    done();
                }
            }
      };
    }]);