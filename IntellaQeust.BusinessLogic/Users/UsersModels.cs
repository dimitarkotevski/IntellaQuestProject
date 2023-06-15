using FluentValidation;
using FluentValidation.Attributes;
using IntellaQeust.BusinessLogic;
using IntellaQeust.BusinessLogic.ViewModels;
using IntellaQuest.Domain;
using System;
using System.Collections.Generic;

namespace IntellaQuest.BusinessLogic.ViewModels
{
    public class UserRegistrationViewModel
    {
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
    public class UserLoginViewModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
    [Validator(typeof(UserViewModelValidator))]
    public class UserViewModel
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public IList<ProductViewModel> FavouriteProducts { get; set; }
        public IList<LookupViewModel> Orders { get; set; }
        public PaymentsViewModel Payment { get; set; }
    }
    public class UserViewModelValidator : AbstractValidator<UserViewModel>
    {
        public UserViewModelValidator()
        {
            RuleFor(x => x.FirstName).NotEmpty().WithMessage("First Name is required.");
            RuleFor(x => x.LastName).NotEmpty().WithMessage("Last Name is required.");
            RuleFor(x => x.Email).EmailAddress().WithMessage("Invalid email address.");
            RuleFor(x => x.Username).NotEmpty().WithMessage("Username is required.");
            //RuleFor(x => x.Password).NotEmpty().WithMessage("Password is required.");
        }
    }
}
