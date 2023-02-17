app.controller('AddEditOrder',
    ['$scope', '$uibModalInstance', 'order', 'customers', 'products', 'OrderService',
        function ($scope, $uibModalInstance, order, customers, products, OrderService) {
            $scope.order = order;

            $scope.customers = customers;
            $scope.products = products;
            $scope.error = null;
            $scope.exception = null;
            $scope.alerts = [];

            $scope.ok = function (orderFromModel) {
                if (!$scope.OrderForm.$valid) {
                    return;
                } else {
                    if (!orderFromModel.Id) {
                        OrderService.add(orderFromModel).then(
                            function () {
                                $uibModalInstance.close();
                            },
                            function (response) {
                                $scope.exception = response.data.exception;
                                $scope.addAlert()
                            }
                        )
                    } else {
                        OrderService.edit(orderFromModel).then(
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