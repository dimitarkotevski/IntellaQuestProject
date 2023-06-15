using IntellaQeust.BusinessLogic.Mappers;
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
                Id = user.Id,
                Username = user.Username,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                Address = user.Address,
                FavouriteProducts = user.FavouriteProducts.Select(x=>x.Product).Select(x=>x.MapToViewModel()).ToList(),
                Payment = user.Payment.MapToViewModel()
            };
        }
    }
}
