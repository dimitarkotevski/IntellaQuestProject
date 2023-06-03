
using IntellaQeust.BusinessLogic.Requests;
using IntellaQeust.BusinessLogic.ViewModels;
using IntellaQuest.BusinessLogic.Services;
using IntellaQuest.Web.Controllers.Api;
using IntellaQuest.Web.Cors;
using System;
using System.Web.Http.Cors;
using System.Web.Mvc;
using HttpPostAttribute = System.Web.Http.HttpPostAttribute;

namespace IntellaQuest.Web.Controllers
{
    public class CategoriesController : BaseController
    {
        private readonly ICategoryService _categoriesService;

        public CategoriesController(ICategoryService categoryService)
        {
            _categoriesService = categoryService;
        }
        [HttpPost]
        public ActionResult AllTable()
        {
            var data=_categoriesService.GetAll();
            var count = data.Count;
            return Json(new { data, count }, JsonRequestBehavior.AllowGet);
        }
        // POST: Categories
        [HttpPost]
        public ActionResult All( RequestModel request)
        {
            return Json(_categoriesService.GetAll(request), JsonRequestBehavior.AllowGet);
        }
        // POST: Categories/Get/5
        [HttpPost]
        public ActionResult Get( Guid id)
        {
            return Json(_categoriesService.Get(id));
        }

        // POST: Categories/Create
        [HttpPost]
        public ActionResult Create( CategoryViewModel model)
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
        public ActionResult Edit( CategoryViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return ErrorNotAcceptable();
            }
            _categoriesService.Update(model);
            return Json(new { success = true}, JsonRequestBehavior.AllowGet);
        }


        // POST: Categories/DeleteById/5
        [HttpPost]
        public ActionResult DeleteById(Guid id)
        {
            _categoriesService.DeleteById(id);
            return Json(new { success = true}, JsonRequestBehavior.AllowGet);
        }
    }
}
