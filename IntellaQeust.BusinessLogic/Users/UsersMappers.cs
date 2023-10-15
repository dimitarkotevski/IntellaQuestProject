using IntellaQeust.BusinessLogic;
using IntellaQeust.BusinessLogic.Mappers;
using IntellaQuest.BusinessLogic.ViewModels;
using IntellaQuest.Domain;
using System.Linq;
using System.Runtime.CompilerServices;

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
        public static UserGridModel MapToGridModel(this User user)
        {
            return new UserGridModel
            {
                Id = user.Id,
                Username = user.Username,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                Address = user.Address,
                City = user.City,
                ZipCode = user.ZipCode,
                Role = user.Role.Name,
                State = user.State
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
                Payment = user.Payment != null ? new IntellaQeust.BusinessLogic.ViewModels.PaymentsProfileViewModel
                {
                    Id = user.Payment.Id,
                    CardHolder = user.Payment.CardHolder,
                    CardNumber = "**** **** **** " + user.Payment.CardNumber.Substring(user.Payment.CardNumber.Length - 4).ToString(),
                    ExpirationDate = user.Payment.ExpirationDate.Month + "/" + user.Payment.ExpirationDate.Year % 2000,

                } : null,
                FavouriteProdutcs = user.FavouriteProducts.Select(x=> new LookupViewModel
                {
                    Id = x.Id,
                    Name = x.Name,
                    Status = true
                }).ToList()
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
        public static LookupViewModel MapToLookupUsernameViewModel(this User user)
        {
            return new LookupViewModel
            {
                Id = user.Id,
                Name = user.Username,
                Status = true
            };
        }
    }
}
