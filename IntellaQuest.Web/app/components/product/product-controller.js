app.controller('ProductController',
    ['$scope', '$uibModal', 'ProductService', 'CategoryService', 'Flash','successMessages',
        function ($scope, $uibModal, ProductService, CategoryService, Flash, successMessages) {
        $scope.greeting = 'Products table';
        $scope.products = [];
        $scope.categories = [];
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
            ProductService.getAll($scope.filterPageRequest).then(function (response) {
                $scope.products = response.data.Items;

                $scope.filterPageResponse = {
                    TotalItems: response.data.TotalItems,
                    Size: response.data.Size.toString(),
                    TotalPages: response.data.TotalPages,
                    CurrentPage: response.data.CurrentPage
                }
            });
        }
        
        $scope.getCategeries = function () {
            CategoryService.getAll(null).then(function (response) {
                $scope.categories = response.data.Items;
            })
        }
        $scope.reset = function () {
            $scope.filterPageRequest = {
                SearchString: "",
                SearchStatus: "",
                isAscending: "",
                EntityId: "",
                PageNeeded: 1,
                Size: 5
            }
            $scope.refresh();
        }

        $scope.openNew = function () {
            $uibModal.open({
                templateUrl: 'app/modals/product-add-edit/add-edit-product.html',
                controller: 'AddEditProduct',
                resolve: {
                    product: {
                        Name: '',
                        Status: "true"
                    },
                    categories: CategoryService.getAll(null).then(function (response) {
                        return response.data.Items;
                    })
                }
            }).result.then(function () {
                $scope.refresh();
                $scope.massage(
                    successMessages.successFlashMassage,
                    successMessages.createProductMassageHtml
                );
            });
        };

        $scope.openEdit = function (product) {
            $uibModal.open({
                templateUrl: 'app/modals/product-add-edit/add-edit-product.html',
                controller: 'AddEditProduct',
                resolve: {
                    product: ProductService.get(product.Id).then(function (res) {
                        return res.data;
                    }),
                    categories: CategoryService.getAll(null).then(function (response) {
                        return response.data.Items;
                    })
                }
            }).result.then(function () {
                $scope.refresh();
                $scope.massage(
                    successMessages.successFlashMassage,
                    successMessages.editProductMassageHtml
                );
            });
        };

        $scope.openDelete = function (Id) {
            $uibModal.open({
                templateUrl: 'app/modals/delete/delete-controller.html',
                controller: 'deleteController',
                resolve: {
                    entity: ProductService.get(Id).then(function (res) {
                        return res.data;
                    }),
                    entityService: ProductService
                }
            }).result.then(function () {
                $scope.refresh();
                $scope.massage(
                    successMessages.successFlashMassage,
                    successMessages.deleteProductMassageHtml
                );
            });
        };
        $scope.massage = function (type, message) {
            Flash.create(type, message);
        };

        //refresh and get categories
        $scope.refresh();
        $scope.getCategeries();

        $scope.page = function () {
            $scope.filterPageRequest = {
                SearchString: $scope.filterPageRequest.SearchString,
                EntityId: $scope.filterPageRequest.EntityId,
                SortName: $scope.filterPageRequest.SortName,
                isAscending: $scope.filterPageRequest.isAscending,
                PageNeeded: $scope.filterPageResponse.CurrentPage,
                Size: $scope.filterPageResponse.Size
            }
            $scope.refresh();
        }
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

    }]);