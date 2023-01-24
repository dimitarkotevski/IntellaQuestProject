using IntellaQeust.BusinessLogic.CategoryModels;
using IntellaQeust.BusinessLogic.CategoryService;
using System;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers
{
    public class CategoriesController : Controller
    {
        private readonly ICategoriesService _categoriesService;

        public CategoriesController(ICategoriesService categoryService)
        {
            _categoriesService = categoryService;
        }

        // GET: Categories
        [HttpPost]
        public ActionResult GetAll()
        {
            return Json(_categoriesService.GetAll());
        }

        // GET: Categories/Get/5
        [HttpPost]
        public ActionResult Get(Guid id)
        {
            return Json(_categoriesService.Get(id));
        }

        // POST: Categories/Create
        [HttpPost]
        public ActionResult Create(CategoriesViewModel model)
        {
            return Json(_categoriesService.Create(model));
        }
        // POST: Categories/Edit/5
        [HttpPost]
        public void Edit(CategoriesViewModel model)
        {
            _categoriesService.Update(model);
        }


        // POST: Categories/DeleteById/5
        [HttpPost]
        public void DeleteById(Guid id)
        {
            _categoriesService.DeleteById(id);
        }
        // POST: Categories/Delete
        [HttpPost]
        public void Delete(CategoriesViewModel model)
        {
            _categoriesService.Delete(model);
        }
    }
}
