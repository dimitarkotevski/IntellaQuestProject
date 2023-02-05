(function () {
    'use strict';

    app.run(function ($rootScope) {
        // initialize variables
        $rootScope.flash = {};
        $rootScope.flash.text = '';
        $rootScope.flash.type = '';
        $rootScope.flash.timeout = 5000;
        $rootScope.hasFlash = false;
    });

    // Directive for compiling dynamic html
    app.directive('dynamic', function ($compile) {
        return {
            restrict: 'A',
            replace: true,
            link: function (scope, ele, attrs) {
                scope.$watch(attrs.dynamic, function (html) {
                    ele.html(html);
                    $compile(ele.contents())(scope);
                });
            }
        };
    });

    // Directive for closing the flash message
    app.directive('closeFlash', function ($compile, Flash) {
        return {
            link: function (scope, ele) {
                ele.on('click', function () {
                    Flash.dismiss();
                });
            }
        };
    });

   

    app.factory('Flash', ['$rootScope', '$timeout',
        function ($rootScope, $timeout) {

            var dataFactory = {},
                timeOut;

            // Create flash message
            dataFactory.create = function (type, text, addClass) {
                var $this = this;
                $timeout.cancel(timeOut);
                $rootScope.flash.type = type;
                $rootScope.flash.text = text;
                $rootScope.flash.addClass = addClass;
                $timeout(function () {
                    $rootScope.hasFlash = true;
                }, 100);
                timeOut = $timeout(function () {
                    $this.dismiss();
                }, $rootScope.flash.timeout);
            };

            // Dismiss flash message
            dataFactory.dismiss = function () {
                $timeout.cancel(timeOut);
                $timeout(function () {
                    $rootScope.hasFlash = false;
                });
            };
            return dataFactory;
        }
    ]);
}());