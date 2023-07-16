using IntellaQeust.BusinessLogic.Requests;
using IntellaQeust.BusinessLogic.ViewModels;
using IntellaQuest.BusinessLogic.Services;
using IntellaQuest.Web.Controllers.Api;
using System;
using System.IO;
using System.Net.Http;
using System.Net;
using System.Web.Mvc;
using Microsoft.AspNetCore.Http;
using System.Drawing;
using System.Web.ModelBinding;
using System.Web.Http;
using HttpPostAttribute = System.Web.Http.HttpPostAttribute;
using Microsoft.AspNetCore.Mvc;
using ActionResult = System.Web.Mvc.ActionResult;

namespace IntellaQuest.Web.Controllers
{
    public class ProductsController : BaseController
    {
        private readonly IProductService _productsService;

        public ProductsController(IProductService productsService)
        {
            _productsService = productsService;
        }
        [HttpPost]
        public ActionResult All(RequestModel request)
        {
            var gridProducts = _productsService.GetAll(request);
            var json = Json(gridProducts);
            json.MaxJsonLength = int.MaxValue;
            return json;
        }
        [HttpPost]
        public ActionResult GetTable()
        {
            var data = _productsService.GetAllTable();
            var recordsTotal = data.Count;
            return Json( new {data, recordsTotal }, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult Get(Guid Id)
        {
            return Json(_productsService.Get(Id));
        }
        [HttpPost]
        public ActionResult GetProductImage(Guid id)
        {

            var image = _productsService.GetProductImage(id);
            return Json(image);
        }
        #region ADMIN ACTION
        [HttpPost]
        public ActionResult Create(ProductViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(ModelState.Values);
            }
            return Json(new { success = _productsService.Create(model) });
        }
        [HttpPost]
        public ActionResult Edit(ProductViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(ModelState.Values);
            }
            
            return Json(new {success= _productsService.Update(model)});
        }
        [HttpPost]
        public ActionResult Delete(Guid Id)
        {
            
            return Json(new {success= _productsService.Delete(Id)});
        }
        [HttpPost]
        public ActionResult AddImageToProduct(Guid id,string image)
        {
            _productsService.UploadImage(id,image);
            return Json(true);
        }
        [HttpPost]
        public ActionResult GetAllBrands(Guid categoryId)
        {
            return Json(_productsService.GetAllBrands(categoryId));
        }
        
        #endregion
    }
}
