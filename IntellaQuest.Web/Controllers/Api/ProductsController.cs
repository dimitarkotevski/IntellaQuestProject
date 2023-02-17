using IntellaQeust.BusinessLogic.Models;
using IntellaQeust.BusinessLogic.Requests;
using IntellaQuest.BusinessLogic.Services;
using IntellaQuest.Web.Controllers.Api;
using System;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers
{
    public class ProductsController : BaseController
    {
        private readonly IProductService _productsService;

        public ProductsController(IProductService productsService)
        {
            _productsService = productsService;
        }
        // POST: Products
        [HttpPost]
        public ActionResult All(RequestModel request)
        {
            return Json(_productsService.GetAll(request));
        }

        // POST: Products/get/5
        
        public ActionResult Get(Guid Id)
        {
            return Json(_productsService.Get(Id));
        }

        // POST: Products/Create
        [HttpPost]
        public ActionResult Create(ProductViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(ModelState.Values);
            }
            return Json(new { success = _productsService.Create(model) });
        }

        

        // POST: Products/Edit/5
        [HttpPost]
        public ActionResult Edit(ProductViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(ModelState.Values);
            }
            
            return Json(new {success= _productsService.Update(model)});
        }

        // POST: Products/Delete/5
        [HttpPost]
        public ActionResult Delete(Guid Id)
        {
            
            return Json(new {success= _productsService.Delete(Id)});
        }
    }
}
