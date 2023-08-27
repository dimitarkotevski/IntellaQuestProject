using IntellaQeust.BusinessLogic;
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
                Payment = user.Payment.MapToViewModel()
            };
        }
        public static UserDetailsModel MapToUserDetailModel(this User user)
        {
            return new UserDetailsModel
            {
                Id = user.Id,
                Username = user.Username,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                Address = user.Address,
                Description = user.Description,
                State = user.State,
                City = user.City,
                ZipCode = user.ZipCode,
            };
        }
        public static LookupViewModel MapToLookupViewModel(this User user)
        {
            return new LookupViewModel
            {
                Id = user.Id,
                Name = user.FirstName + " " + user.LastName,
                Status = true
            };
        }
    }
}
