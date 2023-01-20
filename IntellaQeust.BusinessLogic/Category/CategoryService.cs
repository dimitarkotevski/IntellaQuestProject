using IntellaQuest.BusinessLogic.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IntellaQeust.BusinessLogic.Category
{
    public interface ICategoryService
    {
        CategoryViewModel Get(Guid Id);
        List<CategoryViewModel> GetAll();
        Guid Create(CustomerViewModel model);
        void Update(CategoryViewModel model);
        //void Delete(Guid Id);
        //bool CheckEmailExists(CategoryViewModel model);
        //bool CheckUsernameExists(CategoryViewModel model);
    }

    public class CategoryService
    {
    }
}
