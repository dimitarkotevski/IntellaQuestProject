app.directive('tablePicker', function () {
    return {
        scope: {
            hearderRow: '=',
            rows: '=',
            controller:'='
        },
        require: 'ngModel',
        templateUrl: 'app/pickers/table-picker.html',
        controller: 'CategoryController',
    };
});