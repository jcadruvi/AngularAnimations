
    angular.module('app').animation('.slide-left', [function() {
      return {
            beforeAddClass : function(element, className, done) {
                if(className == 'ng-hide') {
                    $(element).animate({width:'toggle'}, 1000);
                    //$(element).velocity("transition.bounceLeftOut", {
                    //    duration: 1000
                    //});
                }
                else {
                    done();
                }
            },
            removeClass : function(element, className, done) {
                if(className == 'ng-hide') {
                    $(element).animate({width:'toggle'}, 1000);
                    //$(element).velocity("transition.bounceRightIn", {
                    //    duration: 1000
                    //});
                }
                else {
                    done();
                }
            }
      };
    }]);