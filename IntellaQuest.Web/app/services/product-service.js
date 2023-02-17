app.factory('ProductService', function ($http) {
    var baseUrl = '/products';
    var ProductService = {};
    ProductService.add = function (newProduct) {
        return $http.post(baseUrl + '/create/', newProduct);
    };
    ProductService.getAll = function (filterPage) {
        return $http.post(baseUrl + '/all', filterPage);
    };
    ProductService.get = function (guid) {
        return $http.post(baseUrl+'/get/'+guid);
    };
    ProductService.delete = function (guid) {
        return $http.post(baseUrl + '/delete/' + guid);
    };
    ProductService.edit = function (product) {
        return $http.post(baseUrl + '/edit/' + product.Id, product);
    };
    return ProductService;
})