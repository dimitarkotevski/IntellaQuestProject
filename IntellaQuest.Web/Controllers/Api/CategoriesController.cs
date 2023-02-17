using IntellaQeust.Business.Services;
using IntellaQeust.BusinessLogic.CategoryModel;
using IntellaQeust.BusinessLogic.Requests;
using IntellaQuest.Web.Controllers.Api;
using System;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers
{
    public class CategoriesController : BaseController
    {
        private readonly ICategoryService _categoriesService;

        public CategoriesController(ICategoryService categoryService)
        {
            _categoriesService = categoryService;
        }

        // GET: Categories
        [HttpPost]
        public ActionResult All(RequestModel request)
        {
            return Json(_categoriesService.GetAll(request));
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
                return ErrorNotAcceptable();
            }
            _categoriesService.Create(model);
            return Json(new { success =true});
        }

        

        // POST: Categories/Edit/5
        [HttpPost]
        public ActionResult Edit(CategoryViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return ErrorNotAcceptable();
            }
            _categoriesService.Update(model);
            return Json(new { success = true});
        }


        // POST: Categories/DeleteById/5
        [HttpPost]
        public ActionResult DeleteById(Guid id)
        {
            _categoriesService.DeleteById(id);
            return Json(new { success = true});
        }
    }
}
