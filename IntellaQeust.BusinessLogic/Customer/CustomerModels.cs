using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
