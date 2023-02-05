app.controller('editController', ['$scope', '$uibModalInstance', 'category', 'CategoryService',
    function ($scope,$uibModalInstance,category,CategoryService){
        $scope.category = category;
        $scope.ok = function (catEdited) {
            CategoryService.edit(catEdited).then(function () {
                $uibModalInstance.close();
            })
    }

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    }
}])