using IntellaQuest.Domain;
using System;
using System.Collections.Generic;

namespace IntellaQeust.BusinessLogic.Models
{
    public class ProductsViewModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public Categories Category { get; set; }
    }
}
