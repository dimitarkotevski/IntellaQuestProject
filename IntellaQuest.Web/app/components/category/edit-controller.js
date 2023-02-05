app.controller('DeleteController',function ($uibModalInstance,item){
    $ctrl.items = items;


    $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
    };

    $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
})