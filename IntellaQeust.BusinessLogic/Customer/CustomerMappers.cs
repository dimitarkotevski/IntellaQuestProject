using IntellaQuest.BusinessLogic;
using IntellaQuest.BusinessLogic.Models;
using IntellaQuest.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQuest.BusinessLogic.Mappers
{
    public static class CustomerMappers
    {
        public static CustomerViewModel MapToViewModel(Customer customer)
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
    }
}
