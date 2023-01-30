using IntellaQeust.BusinessLogic;
using IntellaQeust.BusinessLogic.CategoryModel;
using IntellaQuest.Domain;
using NHibernate.Mapping;
using System.Collections.Generic;
using System.Linq;

namespace IntellaQuest.BusinessLogic.Mappers
{
    public static class CategoriesMappers
    {
        public static CategoryViewModel MapToViewModel(this Category category)
        {
            return new CategoryViewModel
            {
                Id = category.Id,
                Name = category.Name,
                Status = category.Status,
                Products = category.Products.Select(
                    product=> new LookupViewModel { 
                        Id=product.Id ,
                        Name=product.Name,
                    }).ToList()
            };
        }
    }
}
