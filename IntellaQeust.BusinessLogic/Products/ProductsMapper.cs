using IntellaQeust.BusinessLogic.Models;
using IntellaQuest.Domain;
using System.Runtime.CompilerServices;

namespace IntellaQeust.BusinessLogic.Mappers
{
    public static class ProductsMappers
    {
        public static ProductsViewModel MapToViewModel(this Products product)
        {
            return new ProductsViewModel
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Category = product.Category
            };
        }
    }
}
