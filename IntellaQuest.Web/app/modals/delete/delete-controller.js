app.controller('deleteController',
            ['$scope','$uibModalInstance','entity','entityService',
    function ($scope, $uibModalInstance, entity, entityService) {
        $scope.entity = entity;


        $scope.ok = function (entity) {
            entityService.delete(entity.Id).then(function () {
                $uibModalInstance.close();
            });
        }

        $scope.cancel = function () {
            $uibModalInstance.dismiss();
        }
    }
]);