app.controller('AddEditProduct', ['$scope', '$uibModalInstance', 'product','categories', 'ProductService',
    function ($scope, $uibModalInstance, product, categories, ProductService) {
        $scope.product = product;
        $scope.categories = categories;
        $scope.error = null;
        $scope.exception = null;
        $scope.alerts = [];

        $scope.ok = function (productFromModel) {
            if (!$scope.ProductForm.$valid) {
                return;
            } else {
                if (!productFromModel.Id) {
                    ProductService.add(productFromModel).then(
                        function () {
                            $uibModalInstance.close();
                        },
                        function (response) {
                            $scope.exception = response.data.exception;
                            $scope.addAlert()
                        }
                    )
                } else {
                    ProductService.edit(productFromModel).then(
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