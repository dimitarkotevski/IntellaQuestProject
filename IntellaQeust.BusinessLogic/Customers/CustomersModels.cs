using FluentValidation;
using FluentValidation.Attributes;
using System;

namespace IntellaQuest.BusinessLogic.Models
{
    [Validator(typeof(CustomerViewModelValidator))]
    public class CustomerViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
    public class CustomerViewModelValidator : AbstractValidator<CustomerViewModel>
    {
        public CustomerViewModelValidator()
        {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Name is required.");
            RuleFor(x => x.Surname).NotEmpty().WithMessage("Surname is required.");
            RuleFor(x => x.Email).EmailAddress().WithMessage("Invalid email address.");
            RuleFor(x => x.Username).NotEmpty().WithMessage("Username is required.");
            RuleFor(x => x.Password).NotEmpty().WithMessage("Password is required.");
        }
    }
}
