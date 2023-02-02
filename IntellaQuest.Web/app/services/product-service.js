app.factory('ProductService', function ($http) {
    var baseUrl = '/products';
    var ProductService = {};
    ProductService.getAll = function () {
        return $http.post(baseUrl+'/all');
    };
    ProductService.get = function (guid) {
        return $http.post(baseUrl+'/'+guid);
    };
    return ProductService;
})