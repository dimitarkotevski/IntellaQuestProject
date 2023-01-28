using IntellaQuest.BusinessLogic.Models;
using IntellaQuest.Domain;

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
            };
        }
        public static Customer MapToModel(this CustomerViewModel model)
        {
            return new Customer
            {
                Id = model.Id,
                Name = model.Name,
                Surname = model.Surname,
                Email = model.Email,
                Username = model.Username,
                Password = model.Password,
            };
        }
    }
}
