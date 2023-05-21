using IntellaQuest.Domain;
using System.Linq;

namespace IntellaQeust.BusinessLogic.Orders
{
    public static class OrderMappers
    {
        public static OrderViewModel MapToViewModel(this Order model)
        {
            return new OrderViewModel
            {
                Id=model.Id,
                Customer=new LookupViewModel
                {
                    Id=model.Customer.Id,
                    Name=model.Customer.FirstName + " "+ model.Customer.LastName,
                },
                ShoppingCart = new LookupViewModel 
                {
                    Id=model.ShoppingCart.Id,
                },
                OrderStatus = model.OrderStatus,
            };
        }
    }
}
