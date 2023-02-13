app.controller('ProductController', ['$scope', 'ProductService', 'CategoryService',
    function ($scope, ProductService, CategoryService) {
        $scope.greeting = 'Products table';
        $scope.products = [];
        $scope.categories = [];
        $scope.filterPageRequest = {
            SearchString: "",
            SortName: "",
            isAscending: "",
            CategoryId: "",
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
            console.log($scope.filterPageRequest)
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
        $scope.refresh();
        $scope.getCategeries = function () {
            CategoryService.getAll(null).then(function (response) {
                $scope.categories = response.data.Items;
                console.log($scope.categories)
            })
        }
        $scope.reset = function () {
            $scope.filterPageRequest = {
                SearchString: "",
                SearchStatus: "",
                isAscending: "",
                CategoryId: "",
                PageNeeded: 1,
                Size: 5
            }
            $scope.refresh();
        }

        $scope.getCategeries();
        $scope.page = function () {
            $scope.filterPageRequest = {
                SearchString: $scope.filterPageRequest.SearchString,
                CategoryId: $scope.filterPageRequest.CategoryId,
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