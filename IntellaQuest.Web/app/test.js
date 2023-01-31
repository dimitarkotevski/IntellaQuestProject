var myApp = angular.module('IntellaQuest', []);

myApp.controller('GreetingController', ['$scope', function ($scope) {
    $scope.greeting = 'Hello World!';
}]);