app.controller('addController', ['$scope', '$uibModalInstance', 'category', 'CategoryService',
    function ($scope, $uibModalInstance, category, CategoryService) {
        $scope.category = category;


        $scope.ok = function (newCategory) {
            CategoryService.add(newCategory).then(function () {
                $uibModalInstance.close();
            })
        }
        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        }
    }

])