app.controller('CustomerController', ['$scope','CustomerService', function($scope,CustomerService) {
    $scope.greeting = 'Customers Table';
    $scope.customers=[];
    CustomerService.getAll().then(function(response){
        $scope.customers = response.data;
        console.log($scope.customers)
    });
}]);