app.controller('CategoryController',
    ['$scope', '$uibModal', 'CategoryService', 'Flash','successMessages',
        function ($scope, $uibModal, CategoryService, Flash, successMessages) {
        $scope.title = "Category table";
        $scope.categories = [];
        $scope.filterPageRequest = {
            SearchString: "",
            SortName: "",
            isAscending: "",
            SearchStatus:"",
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
            });
        }

        $scope.refresh();

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


        $scope.openNew = function () {
            $uibModal.open({
                templateUrl: 'app/modals/category-add-edit/add-edit-category.html',
                controller: 'AddEditCategory',
                resolve: {
                    category: {
                        Name: '',
                        Status: "true"
                    },

                } 
            }).result.then(function () {
                $scope.refresh();
                $scope.massage(
                    successMessages.successFlashMassage,
                    successMessages.createCategoryMassageHtml
                );
            });
        };

        $scope.openEdit = function (category) {
            $uibModal.open({
                templateUrl: 'app/modals/category-add-edit/add-edit-category.html',
                controller: 'AddEditCategory',
                resolve: {
                    category: CategoryService.get(category.Id).then(function (res) {
                        return res.data;
                    })
                }
            }).result.then(function () {
                $scope.refresh();
                $scope.massage(
                    successMessages.successFlashMessage,
                    successMessages.editCategoryMassageHtml
                );
            });
        };

        $scope.openDelete = function (Id) {
            $uibModal.open({
                templateUrl: 'app/modals/delete/delete-controller.html',
                controller: 'deleteController',
                resolve: {
                    entity: CategoryService.get(Id).then(function (res) {
                        return res.data;
                    }),
                    entityService: CategoryService
                }
            }).result.then(function () {
                $scope.refresh();
                $scope.massage(
                    successMessages.successFlashMessage,
                    successMessages.deleteCategoryMassageHtml
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