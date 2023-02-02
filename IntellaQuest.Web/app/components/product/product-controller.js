app.controller('ProductController', ['$scope','ProductService', function($scope,ProductService) {
    $scope.greeting = 'Products table';
    $scope.products = [];
    ProductService.getAll().then(function (response) {
        $scope.products = response.data;
      });
}]);