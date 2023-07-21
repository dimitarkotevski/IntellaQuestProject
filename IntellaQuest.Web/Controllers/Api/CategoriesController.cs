
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
        #region ADMIN ACTION

        [HttpPost]
        public ActionResult AllCategories()
        {
            var data=_categoriesService.GetAll();
            var count = data.Count;
            return Json(new { Items = data, TotalItems = count }, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult GetProductsByCategory(string Url,RequestModel request)
        {
            var gridProducts = _categoriesService.GetProductsByCategory(Url,request);
            return Json(gridProducts);
        }
        [HttpPost]
        public ActionResult GetCategoryByUrl(string Url)
        {
            var gridProducts = _categoriesService.GetCategoryByUrl(Url);
            return Json(gridProducts);
        }
        [HttpPost]
        public ActionResult All( RequestModel request)
        {
            return Json(_categoriesService.GetAll(request), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult Get( Guid id)
        {
            return Json(_categoriesService.Get(id));
        }
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
        [HttpPost]
        public ActionResult DeleteById(Guid id)
        {
            _categoriesService.DeleteById(id);
            return Json(new { success = true}, JsonRequestBehavior.AllowGet);
        }
        
        #endregion
    }
}
