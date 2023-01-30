using IntellaQuest.Domain;

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
                    Name=model.Customer.Name+ " "+ model.Customer.Surname,
                },
                Product = new LookupViewModel 
                {
                    Id=model.Product.Id,
                    Name=model.Product.Name,
                },
                Quantity= model.Quantity,
            };
        }
    }
}
