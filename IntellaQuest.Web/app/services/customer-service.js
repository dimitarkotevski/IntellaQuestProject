app.factory('CustomerService',function($http){
    var baseUrl="/customers";
    var CustomerService={};
    CustomerService.getAll=function(){
        return $http.post(baseUrl+'/all');
    }
    CustomerService.get=function(guid){
        return $http.post(baseUrl+'/get/'+guid)
    }
    return CustomerService;
});