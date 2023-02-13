app.controller('deleteController', ['$scope', '$uibModalInstance', 'category','CategoryService',
    function ($scope, $uibModalInstance, category,CategoryService) {
        $scope.category = category;


        $scope.ok = function (category) {
            CategoryService.delete(category.Id).then(function () {
                $uibModalInstance.close();
            });
        }

        $scope.cancel = function () {
            $uibModalInstance.dismiss();
        }
    }
]);