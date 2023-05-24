using IntellaQeust.BusinessLogic.ViewModels;
using IntellaQuest.Domain;

namespace IntellaQeust.BusinessLogic.Mappers
{
    public static class OrderMappers
    {
        public static OrderViewModel MapToViewModel(this Order model)
        {
            return new OrderViewModel
            {
                Id=model.Id,
                User=new LookupViewModel
                {
                    Id=model.User.Id,
                    Name=model.User.FirstName + " "+ model.User.LastName,
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
