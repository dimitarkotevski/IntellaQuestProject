using IntellaQeust.BusinessLogic.ViewModels;
using IntellaQuest.BusinessLogic.Mappers;
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
                Name = model.Name,
            };
        }
    }
}
