
    angular.module('app').animation('.slide', [function() {
      return {
            beforeAddClass : function(element, className, done) {
                if(className == 'ng-hide') {
                    $(element).velocity("slideUp", {
                        duration: 1000
                    });
                }
                else {
                    done();
                }
            },
            removeClass : function(element, className, done) {
                if(className == 'ng-hide') {
                    $(element).velocity("slideDown", {
                        duration: 1000
                    });
                }
                else {
                    done();
                }
            }
      };
    }]);