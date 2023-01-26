using IntellaQeust.BusinessLogic;
using IntellaQeust.BusinessLogic.CategoryModels;
using IntellaQuest.Domain;
using System.Linq;

namespace IntellaQuest.BusinessLogic.Mappers
{
    public static class CategoriesMappers
    {
        public static CategoriesViewModel MapToViewModel(this Categories category)
        {
            return new CategoriesViewModel
            {
                Id = category.Id,
                Name = category.Name,
                Status=category.Status,
            };
        }
        public static CategoriesViewModel MapToViewModelWithProducts(this Categories categories)
        {
            return new CategoriesViewModel
            {
                Id = categories.Id,
                Name = categories.Name,
                Status= categories.Status,
                Products= categories.Products.Select(x=> new LookupViewModel
                {
                    Id = x.Id,
                    Name = x.Name,
                }).ToList(),
            };
        }
        public static Categories MapToModel(this CategoriesViewModel category)
        {
            return new Categories
            {
                Id = category.Id,
                Name = category.Name,
                Status = category.Status,
                //Products = category.Products
            };
        }
        public static Categories MapToModelWithoutProducts(this Categories categories)
        {
            return new Categories
            {
                Id = categories.Id,
                Name = categories.Name,
            };
        }
       
    }
}
