namespace IntellaQeust.BusinessLogic.Exceptions.ExceptionMassages
{
    public static class ShopExceptionsMassages
    {
        public static class CustomerExceptionMassages
        {
            public static string NOT_FOUND_EXCEPTION = "User not found";
            public static string ID_NOT_FOUND_EXCEPTION = "User with Id: {0} not found";
            public static string EMAIL_NOT_FOUND_EXCEPTION = "User with email: '{0}' not found";
            public static string USERNAME_ALREADY_EXIST = "Username '{0}'  already exist";
            public static string EMAIL_ALREADY_EXIST = "Email '{0}'  already exist";
            public static string USERNAME_NOT_FOUND_EXCEPTION = "User with username: '{0}' not found";
        }
        public static class CategoriesExceptionMassages
        {
            public static string NOT_FOUND_EXCEPTION = "Category not found";
            public static string ID_NOT_FOUND_EXCEPTION = "Category with Id: {0} not found";
            public static string NAME_NOT_FOUND_EXCEPTION = "Category name not exist";
            public static string NAME_ALREADY_EXIST_EXCEPTION = "Category name already exist";
        }
        public static class ProductsExceptionMassages
        {
            public static string NOT_FOUND_EXCEPTION = "Product not found";
            public static string ID_NOT_FOUND_EXCEPTION = "Product with Id: {0} not found";
            public static string NAME_NOT_FOUND_EXCEPTION = "Product name exist";
        }
        public static class OrderExceptionMassages
        {
            public static string NOT_FOUND_EXCEPTION = "Order not found"; 
            public static string ID_NOT_FOUND_EXCEPTION = "Order with Id: {0} not found"; 
            public static string NAME_NOT_FOUND_EXCEPTION = "Order name not exist";
        }
    }
}
