
    angular.module('app').animation('.slide-left', [function() {
      return {
            beforeAddClass : function(element, className, done) {
                if(className == 'ng-hide') {
                    $(element).velocity("slideLeft", {
                        duration: 1000
                    });
                }
                else {
                    done();
                }
            },
            removeClass : function(element, className, done) {
                if(className == 'ng-hide') {
                    $(element).velocity("slideRight", {
                        duration: 1000
                    });
                }
                else {
                    done();
                }
            }
      };
    }]);