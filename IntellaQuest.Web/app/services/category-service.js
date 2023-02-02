app.factory('CategoryService', function ($http) {
    var baseUrl = '/categories';
    var CategoryService = {};
    CategoryService.getAll = function () {
        return $http.post(baseUrl+'/all');
    };
    CategoryService.get = function (guid) {
        return $http.post(baseUrl+'/get/'+guid);
    };
    return CategoryService;
})