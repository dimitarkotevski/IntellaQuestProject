using IntellaQeust.BusinessLogic.ViewModels;
using IntellaQuest.Domain;
using System.Linq;

namespace IntellaQeust.BusinessLogic.Mappers
{
    public static class ShoppingCartMappers
    {
        public static ShoppingCartsViewModel MapToViewModel(this ShoppingCart model)
        {
            return new ShoppingCartsViewModel
            {
                Id = model.Id,
                Name = "My Shopping Cart",
                TotalCost = model.Products.Sum(p => p.Price),
            };
        }
    }
}
