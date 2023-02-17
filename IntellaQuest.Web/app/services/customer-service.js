app.factory('CustomerService',function($http){
    var baseUrl="/customers";
    var CustomerService = {};
    CustomerService.add = function (newCustomer) {
        return $http.post(baseUrl + '/create/', newCustomer);
    };
    CustomerService.getAll = function (filterPage){
        return $http.post(baseUrl + '/all', filterPage);
    }
    CustomerService.get=function(guid){
        return $http.post(baseUrl+'/get/'+guid)
    }
    CustomerService.delete = function (guid) {
        return $http.post(baseUrl + '/delete/' + guid);
    };
    CustomerService.edit = function (product) {
        return $http.post(baseUrl + '/edit/', product);
    };
    return CustomerService;
});