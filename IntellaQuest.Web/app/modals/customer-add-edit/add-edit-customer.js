app.controller('AddEditCustomer', ['$scope', '$uibModalInstance', 'customer', 'CustomerService',
    function ($scope, $uibModalInstance, customer, CustomerService) {
        $scope.customer = customer;
        $scope.error = null;
        $scope.exception = null;
        $scope.alerts = [];

        $scope.ok = function (customerFromModel) {
            if (!$scope.CustomerForm.$valid) {
                return;
            } else {
                if (!customerFromModel.Id) {
                    CustomerService.add(customerFromModel).then(
                        function () {
                            $uibModalInstance.close();
                        },
                        function (response) {
                            $scope.exception = response.data.exception;
                            $scope.addAlert()
                        }
                    )
                } else {
                    CustomerService.edit(customerFromModel).then(
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