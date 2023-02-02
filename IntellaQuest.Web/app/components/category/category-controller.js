app.controller('CategoryController', ['$scope','$uibModal','$log', 'CategoryService', function ($scope, $uibModal,$log ,CategoryService) {
    $scope.greeting = "Category table";
    var $ctrl = this;
    $scope.items = ['item1', 'item2', 'item3'];
    $scope.categories = [];
    CategoryService.getAll().then(function (response) {
        $scope.categories = response.data;
    });
    $scope.open = function () {
        console.log('opened')
        var modalInstance = $uibModal.open({
          animation: $ctrl.animationsEnabled,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'modalEdit',
          controller: 'CategoryController',
          resolve: {
            items: function () {
              return CategoryService.getAll();
            }
          }
        });
        console.log(modalInstance.items)
        /*modalInstance.result.then(function (selectedItem) {
          $ctrl.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });*/
      };
}]);