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
        public ActionResult All(ProductRequest request)
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
            return Json(_productsService.Create(model));
        }

        

        // POST: Products/Edit/5
        [HttpPost]
        public ActionResult Edit(ProductViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(ModelState.Values);
            }
            _productsService.Update(model);
            return Json(true);
        }

        // POST: Products/Delete/5
        [HttpPost]
        public ActionResult Delete(Guid Id)
        {
            _productsService.Delete(Id);
            return Json(true);
        }
    }
}
