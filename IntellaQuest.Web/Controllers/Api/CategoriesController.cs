using IntellaQeust.Business.Services;
using IntellaQeust.BusinessLogic.CategoryModel;
using System;
using System.IO;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers
{
    public class CategoriesController : Controller
    {
        private readonly ICategoryService _categoriesService;

        public CategoriesController(ICategoryService categoryService)
        {
            _categoriesService = categoryService;
        }

        // GET: Categories
        [HttpPost]
        public ActionResult All()
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
        public ActionResult Create(CategoryViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(ModelState.Values);
            }
            return Json(_categoriesService.Create(model));
        }
        // POST: Categories/Edit/5
        [HttpPost]
        public ActionResult Edit(CategoryViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(ModelState.Values);
            }
            _categoriesService.Update(model);
            return Json(true);
        }


        // POST: Categories/DeleteById/5
        [HttpPost]
        public ActionResult DeleteById(Guid id)
        {
            _categoriesService.DeleteById(id);
            return Json(true);
        }
    }
}
