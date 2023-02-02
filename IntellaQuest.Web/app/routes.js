app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/category");
    $stateProvider
        .state("category", {
            url: "/category",
            controller: "CategoryController",
            templateUrl: "/app/components/category/categories.html"
        })
        .state("product", {
            url: "/product",
            controller: "ProductController",
            templateUrl: "/app/components/product/products.html"
        })
        .state("customer", {
            url: "/customer",
            controller: "CustomerController",
            templateUrl: "/app/components/customer/customers.html"
        })
        .state("order", {
            url: "/order",
            controller: "OrderController",
            templateUrl: "/app/components/order/orders.html"
        })
});