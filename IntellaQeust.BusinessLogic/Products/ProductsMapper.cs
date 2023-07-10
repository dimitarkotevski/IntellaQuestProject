using IntellaQeust.BusinessLogic.ViewModels;
using IntellaQuest.Domain;
using System;
using System.Linq;

namespace IntellaQeust.BusinessLogic.Mappers
{
    public static class ProductsMappers
    {
        public static ProductViewModel MapToViewModel(this Product product)
        {
            return new ProductViewModel
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Price = product.Price,
                Image = System.Text.Encoding.UTF8.GetString(product.Image),
                Category = new LookupViewModel
                    {
                        Id= product.Category.Id,
                        Name = product.Category.Name,
                        Status = product.Category.Status,
                    },
                };
        }
    }
}
