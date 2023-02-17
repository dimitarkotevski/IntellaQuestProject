app.factory('OrderService', function ($http) {
    var baseUrl = '/orders';
    var OrderService = {}
    OrderService.add = function (newOrder) {
        return $http.post(baseUrl + '/create/', newOrder);
    };
    OrderService.getAll = function (filterPage) {
        return $http.post(baseUrl + '/all', filterPage);
    };
    OrderService.get = function (guid) {
        return $http.post(baseUrl + '/get/' + guid);
    };
    OrderService.delete = function (guid) {
        return $http.post(baseUrl + '/delete/' + guid);
    };
    OrderService.edit = function (order) {
        return $http.post(baseUrl + '/edit/' + order.Id, order);
    };
    return OrderService;
})