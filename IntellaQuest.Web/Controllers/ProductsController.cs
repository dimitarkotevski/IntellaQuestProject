using IntellaQeust.BusinessLogic.Models;
using IntellaQuest.BusinessLogic.Services;
using System;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers
{
    public class ProductsController : Controller
    {
        private readonly IProductService _productsService;

        public ProductsController(IProductService productsService)
        {
            _productsService = productsService;
        }
        // POST: Products
        [HttpPost]
        public ActionResult All()
        {
            return Json(_productsService.GetAll());
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
        public void Delete(Guid Id)
        {
            _productsService.Delete(Id);
        }
    }
}
