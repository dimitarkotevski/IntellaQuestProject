using IntellaQeust.BusinessLogic.CategoryModels;
using IntellaQuest.Domain;

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
        public static Categories MapToModel(this CategoriesViewModel category)
        {
            return new Categories
            {
                Id = category.Id,
                Name = category.Name,
                Status = category.Status,
            };
        }
    }
}
