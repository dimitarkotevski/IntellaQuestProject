app.controller('OrderController',
    ['$scope', '$uibModal', 'OrderService', 'CustomerService', 'ProductService', 'successMessages','Flash',
    function ($scope, $uibModal, OrderService, CustomerService, ProductService, successMessages, Flash) {
    $scope.greeting = 'OrderController!';
    $scope.orders = [];
    $scope.filterPageRequest = {
        SearchString: "",
        SortName: "",
        isAscending: "",
        EntityId: "",
        PageNeeded: 1,
        Size: 5
    }
    $scope.filterPageResponse = {
        TotalItems: null,
        Size: 5,
        CurrentPage: 1,
        TotalPages: null
    }


    $scope.refresh = function () {
        $scope.filterPageRequest.Size = $scope.filterPageResponse.Size;
        OrderService.getAll($scope.filterPageRequest).then(function (response) {
            $scope.orders = response.data.Items;

            $scope.filterPageResponse = {
                TotalItems: response.data.TotalItems,
                Size: response.data.Size.toString(),
                TotalPages: response.data.TotalPages,
                CurrentPage: response.data.CurrentPage
            }
        });
    }
        $scope.massage = function (type, message) {
            Flash.create(type, message);
        };

    $scope.openNew = function () {
        $uibModal.open({
            templateUrl: 'app/modals/order-add-edit/add-edit-order.html',
            controller: 'AddEditOrder',
            resolve: {
                order: null,
                customers: CustomerService.getAll(null).then(function (res) {
                    return res.data.Items;
                }),
                products: ProductService.getAll(null).then(function (res) {
                    return res.data.Items;
                })
            }
        }).result.then(function () {
            $scope.refresh();
            $scope.massage(
                successMessages.successFlashMassage,
                successMessages.createOrderMassageHtml
            );
        });
    };

    $scope.openEdit = function (order) {
        $uibModal.open({
            templateUrl: 'app/modals/order-add-edit/add-edit-order.html',
            controller: 'AddEditOrder',
            resolve: {
                order: OrderService.get(order.Id).then(function (res) {
                    return res.data;
                }),
                customers: CustomerService.getAll(null).then(function (res) {
                    return res.data.Items;
                }),
                products: ProductService.getAll(null).then(function (res) {
                    return res.data.Items;
                }),
            }
        }).result.then(function () {
            $scope.refresh();
            $scope.massage(
                successMessages.successFlashMessage,
                successMessages.editOrderMassageHtml
            );
        });
    };

    $scope.openDelete = function (Id) {
        $uibModal.open({
            templateUrl: 'app/modals/delete/delete-controller.html',
            controller: 'deleteController',
            resolve: {
                entity: OrderService.get(Id).then(function (res) {
                    return res.data;
                }),
                entityService: OrderService
            }
        }).result.then(function () {
            $scope.refresh();
            $scope.massage(
                successMessages.successFlashMessage,
                successMessages.deleteOrderMassageHtml
            );
        });
    };

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
}]);