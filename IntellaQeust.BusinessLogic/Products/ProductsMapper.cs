using IntellaQeust.BusinessLogic.Models;
using IntellaQuest.BusinessLogic.Mappers;
using IntellaQuest.Domain;

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
                Category = new LookupViewModel
                {
                    Id= product.Category.Id,
                    Name = product.Category.Name,
                }
            };
        }
    }
}
