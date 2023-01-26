using IntellaQuest.BusinessLogic.Services;
using System;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers
{
    public class ProductsController : Controller
    {
        private readonly IProductsService _productsService;

        public ProductsController(IProductsService productsService)
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
            return View();
        }

        // POST: Products/Create
        [HttpPost]
        public ActionResult Create()
        {
            return View();
        }

        // POST: Products/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // POST: Products/Edit/5
        [HttpPost]
        public ActionResult Edit(Guid Id)
        {
            return View();
        }

        // POST: Products/Delete/5
        [HttpPost]
        public ActionResult Delete(Guid Id)
        {
            return View();
        }
    }
}
