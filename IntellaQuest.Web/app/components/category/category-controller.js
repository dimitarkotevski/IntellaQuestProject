app.controller('CategoryController', ['$scope', '$uibModal', 'CategoryService', 'Flash',
    function ($scope, $uibModal, CategoryService, Flash) {
        $scope.title = "Category table";
        $scope.categories = [];
        $scope.filterPageRequest = {
            PageNeeded: 1,
            Size: 5
        }
        $scope.filterPageResponse = {
            TotalItems: null,
            Size: 5,
            CurrentPage: 1,
            TotalPages: null
        }

        $scope.massage = function (type,message) {
            Flash.create(type, message);
        };

        $scope.info = function () {
            var message = '<strong>Success</strong><div>You successfully edited category.</div>';
            Flash.create('info', message);
        };

        $scope.warning = function () {
            var message = '<strong>Success</strong><div>You successfully deleted category.</div>';
            Flash.create('warning', message);
        };

        $scope.refresh = function () {
            $scope.filterPageRequest.Size = $scope.filterPageResponse.Size;
            CategoryService.getAll($scope.filterPageRequest).then(function (response) {
                $scope.categories = response.data.Items;

                $scope.filterPageResponse = {
                    TotalItems: response.data.TotalItems,
                    Size: response.data.Size.toString(),
                    TotalPages: response.data.TotalPages,
                    CurrentPage: response.data.CurrentPage
                }
                //$scope.filterPageResponse.Size = $scope.filterPageResponse.Size.toString();
                console.log($scope.filterPageResponse)
            });
        }

        $scope.refresh();

        $scope.openEdit = function (category) {
            $uibModal.open({
                templateUrl: 'app/components/category/edit-controller.html',
                controller: 'editController',
                resolve: {
                    category: CategoryService.get(category.Id).then(function (res) {
                        return res.data;
                    })
                }
            }).result.then(function () {
                $scope.refresh();
                $scope.info();
            });
        };

        $scope.openDelete = function (Id) {
            $uibModal.open({
                templateUrl: 'app/components/category/delete-controller.html',
                controller: 'deleteController',
                resolve: {
                    category: CategoryService.get(Id).then(function (res) {
                        return res.data;
                    })
                }
            }).result.then(function () {
                $scope.refresh();
                $scope.warning();
            });
        };

        $scope.openNew = function () {
            $uibModal.open({
                templateUrl: 'app/components/category/add-controller.html',
                controller: 'addController',
                resolve: {
                    category: {
                        Name: '',
                        Status: null
                    }
                }
            }).result.then(function () {
                $scope.refresh();
                $scope.massage(
                    'success',
                    "<strong>Success</strong><div>You successfully create category.</div>"
                );
            });
        };

        $scope.page = function () {

            $scope.filterPageRequest = {
                PageNeeded: $scope.filterPageResponse.CurrentPage,
                Size: $scope.filterPageResponse.Size
            }
            $scope.refresh();
            console.log($scope.filterPageResponse)
        }

    }]);