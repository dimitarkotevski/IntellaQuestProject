app.controller('CategoryController', ['$scope', '$uibModal', 'CategoryService','Flash',
    function ($scope, $uibModal, CategoryService, Flash) {
        $scope.title = "Category table";
        $scope.categories = [];

        $scope.success = function () {
            var message = '<strong>Success</strong><div>You successfully create category.</div>';
            Flash.create('success', message);
        };

        //CategoryService.getAll().then(function (response) {
        //    $scope.categories = response.data;
        //});

        $scope.refresh = function () {
            CategoryService.getAll().then(function (response) {
                $scope.categories = response.data;
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
                $scope.success();
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
                $scope.success();
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
                $scope.success();
            });
        };

    }]);