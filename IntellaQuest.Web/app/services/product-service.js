app.factory('ProductService', function ($http) {
    var baseUrl = '/products';
    var ProductService = {};
    ProductService.getAll = function (filterPage) {
        return $http.post(baseUrl + '/all', filterPage);
    };
    ProductService.get = function (guid) {
        return $http.post(baseUrl+'/'+guid);
    };
    return ProductService;
})