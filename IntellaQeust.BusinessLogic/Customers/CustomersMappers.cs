using IntellaQeust.BusinessLogic;
using IntellaQuest.BusinessLogic.Models;
using IntellaQuest.Domain;
using System.Linq;

namespace IntellaQuest.BusinessLogic.Mappers
{
    public static class CustomersMappers
    {
        public static CustomerViewModel MapToViewModel(this Customer customer)
        {
            return new CustomerViewModel
            {
                Id= customer.Id,
                Name= customer.Name,
                Surname= customer.Surname,
                Email= customer.Email,
                Username= customer.Username,
                Password= customer.Password,
                Orders = customer.Orders.Select(order=> new LookupViewModel
                {
                    Id= order.Id,
                    Name=order.Product.Name
                }).ToList(),
            };
        }
    }
}
