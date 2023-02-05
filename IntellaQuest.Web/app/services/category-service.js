app.factory('CategoryService', function ($http) {
    var baseUrl = '/categories';
    var CategoryService = {};
    CategoryService.add = function (newCategory) {
        return $http.post(baseUrl + '/create', newCategory);
    };
    CategoryService.getAll = function () {
        return $http.post(baseUrl+'/all');
    };
    CategoryService.get = function (guid) {
        return $http.post(baseUrl + '/get/' + guid)
    };
    CategoryService.delete = function (guid) {
        return $http.post(baseUrl + '/DeleteById/' + guid);
    };
    CategoryService.edit = function (category) {
        return $http.post(baseUrl + '/edit' ,category);
    };
    return CategoryService;
})