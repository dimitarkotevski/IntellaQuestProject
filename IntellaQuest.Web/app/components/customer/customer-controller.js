app.controller('CustomerController',
    ['$scope', 'CustomerService', '$uibModal', 'Flash', 'successMessages',
        function ($scope, CustomerService, $uibModal, Flash, successMessages) {
            $scope.greeting = 'Customers Table';
            $scope.customers = [];
            $scope.filterPageRequest = {
                SearchString: "",
                SortName: "",
                isAscending: "",
                SearchStatus: "",
                PageNeeded: 1,
                Size: 5
            }

            $scope.massage = function (type, message) {
                Flash.create(type, message);
            };

            $scope.filterPageResponse = {
                TotalItems: null,
                Size: 5,
                CurrentPage: 1,
                TotalPages: null
            }

            $scope.refresh = function () {
                $scope.filterPageRequest.Size = $scope.filterPageResponse.Size;
                CustomerService.getAll($scope.filterPageRequest).then(function (response) {
                    $scope.customers = response.data.Items;

                    $scope.filterPageResponse = {
                        TotalItems: response.data.TotalItems,
                        Size: response.data.Size.toString(),
                        TotalPages: response.data.TotalPages,
                        CurrentPage: response.data.CurrentPage
                    }
                });
            }

            $scope.refresh();

            $scope.page = function () {

                $scope.filterPageRequest = {
                    SearchString: $scope.filterPageRequest.SearchString,
                    SearchStatus: $scope.filterPageRequest.Status,
                    SortName: $scope.filterPageRequest.SortName,
                    isAscending: $scope.filterPageRequest.isAscending,
                    PageNeeded: $scope.filterPageResponse.CurrentPage,
                    Size: $scope.filterPageResponse.Size
                }
                $scope.refresh();
            }

            $scope.openNew = function () {
                $uibModal.open({
                    templateUrl: 'app/modals/customer-add-edit/add-edit-customer.html',
                    controller: 'AddEditCustomer',
                    resolve: {
                        customer: {
                            Name: '',
                            Surname: '',
                            Email: '',
                            Username: '',
                            Status: "true"
                        },

                    }
                }).result.then(function () {
                    $scope.refresh();
                    $scope.massage(
                        successMessages.successFlashMassage,
                        successMessages.createCustomerMassageHtml
                    );
                });
            };

            $scope.openEdit = function (customer) {
                $uibModal.open({
                    templateUrl: 'app/modals/customer-add-edit/add-edit-customer.html',
                    controller: 'AddEditCustomer',
                    resolve: {
                        customer: CustomerService.get(customer.Id).then(function (res) {
                            return res.data;
                        })
                    }
                }).result.then(function () {
                    $scope.refresh();
                    $scope.massage(
                        successMessages.successFlashMessage,
                        successMessages.editCustomerMassageHtml
                    );
                });
            };

            $scope.openDelete = function (Id) {
                $uibModal.open({
                    templateUrl: 'app/modals/delete/delete-controller.html',
                    controller: 'deleteController',
                    resolve: {
                        entity: CustomerService.get(Id).then(function (res) {
                            return res.data;
                        }),
                        entityService: CustomerService
                    }
                }).result.then(function () {
                    $scope.refresh();
                    $scope.massage(
                        successMessages.successFlashMessage,
                        successMessages.deleteCustomerMassageHtml
                    );
                });
            };
            $scope.sort = function (order) {
                $scope.filterPageRequest.SortName = order;
                if ($scope.filterPageRequest.isAscending == '') {
                    $scope.filterPageRequest.isAscending = 'asc'
                } else if ($scope.filterPageRequest.isAscending == 'asc') {
                    $scope.filterPageRequest.isAscending = 'desc'
                } else {
                    $scope.filterPageRequest.isAscending = 'asc'
                }
                $scope.refresh();
            }


            $scope.reset = function () {
                $scope.filterPageRequest = {
                    SearchString: "",
                    SearchStatus: "",
                    isAscending: "",
                    SearchStatus: "",
                    PageNeeded: 1,
                    Size: 5
                }
                $scope.refresh();
            }
        }]);