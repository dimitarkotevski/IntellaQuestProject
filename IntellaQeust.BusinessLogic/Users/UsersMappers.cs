using IntellaQeust.BusinessLogic;
using IntellaQuest.BusinessLogic.ViewModels;
using IntellaQuest.Domain;
using System.Linq;

namespace IntellaQuest.BusinessLogic.Mappers
{
    public static class UsersMappers
    {
        public static UserViewModel MapToViewModel(this User user)
        {
            return new UserViewModel
            {
                Id= user.Id,
                FirstName= user.FirstName,
                LastName= user.LastName,
                Email= user.Email,
                Username= user.Username,
                Password= user.Password,
                Orders = user.Orders.Select(order=> new LookupViewModel
                {
                    Id= order.Id,
                }).ToList(),
            };
        }
    }
}
