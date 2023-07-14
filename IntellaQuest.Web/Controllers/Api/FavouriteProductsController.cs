using IntellaQuest.BusinessLogic.Services;
using IntellaQuest.Web.Controllers.Api;
using System;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers
{
    public class FavouriteProductsController : BaseController
    {
        private readonly IFavouriteProductService _favouriteProductService;
        public FavouriteProductsController(IFavouriteProductService favouriteProductService)
        {
            _favouriteProductService = favouriteProductService;
        }

        #region USER ACTION
        
        [HttpPost]
        public ActionResult UserAddFavouriteProduct(Guid userId, Guid productId)
        {
            _favouriteProductService.AddProductToFavouriteProduct(userId, productId);
            return Json(true);
        }
        [HttpPost]
        public ActionResult GetUserFavouriteProducts(Guid userId)
        {
            var gridProducts = _favouriteProductService.GetUserFavouriteProducts(userId);
            var json = Json(gridProducts);
            json.MaxJsonLength = int.MaxValue;
            return json;
        }
        [HttpPost]
        public ActionResult RemoveFavouriteProduct(Guid userId, Guid productId)
        {
            _favouriteProductService.RemoveProductFromFavuriteProduct(userId, productId);
            return Json(true);
        }

        #endregion
    }
}