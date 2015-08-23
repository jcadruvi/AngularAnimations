
    angular.module('app').animation('.slide-left', [function() {
      return {
            beforeAddClass : function(element, className, done) {
                if(className == 'ng-hide') {
                    $(element).velocity({width:'0px'}, 1000);
                }
                else {
                    done();
                }
            },
            removeClass : function(element, className, done) {
                if(className == 'ng-hide') {
                    $(element).velocity({width:'500px'}, 1000);
                }
                else {
                    done();
                }
            }
      };
    }]);