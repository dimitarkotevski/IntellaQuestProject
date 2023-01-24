using FluentValidation;
using System;

namespace IntellaQuest.BusinessLogic.Models
{
    public class CustomerViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
        public class CustomerViewModelValidator: AbstractValidator<CustomerViewModel>
        {
            public CustomerViewModelValidator()
            {

            }
        }
}
