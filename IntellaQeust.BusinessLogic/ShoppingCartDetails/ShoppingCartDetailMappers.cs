using IntellaQeust.BusinessLogic.ViewModels;
using IntellaQuest.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQeust.BusinessLogic.Mappers
{
    public static class ShoppingCartDetailMappers
    {
        public static ShoppingCartDetailViewModel MapToViewModel(this ShoppingCartDetail model)
        {
            return new ShoppingCartDetailViewModel
            {
                Id = model.Id,
                Product = model.Product.MapToViewModel(),
                Quantity = model.Quantity
            };
        }
    }
}
