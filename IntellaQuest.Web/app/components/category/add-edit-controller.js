app.controller('AddEditController', ['$scope', '$uibModalInstance', 'category', 'CategoryService',
    function ($scope, $uibModalInstance, category, CategoryService) {
        $scope.category = category;
        $scope.category.Status = category.Status.toString();
        $scope.error = null;
        $scope.exception = null;
        $scope.alerts = [];

        $scope.ok = function (categoryFromModel) {
            if (!$scope.CategoryForm.$valid) {
                return;
            } else {
                if (!categoryFromModel.Id) {
                    CategoryService.add(categoryFromModel).then(
                        function () {
                            $uibModalInstance.close();
                        },
                        function (response) {
                            $scope.exception = response.data.exception;
                            $scope.addAlert()
                        }
                    )
                } else {
                    CategoryService.edit(categoryFromModel).then(
                        function () {
                            $uibModalInstance.close();
                        }, function (response) {
                            $scope.exception = response.data.exception;
                            $scope.addAlert()
                        }
                    )
                }
            }


        }
        $scope.cancel = function () {
            $uibModalInstance.dismiss();
        }

        $scope.addAlert = function () {
            $scope.alerts.push({ msg: $scope.exception });
        };

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };
    }

])