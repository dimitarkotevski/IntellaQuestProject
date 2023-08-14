using IntellaQuest.BusinessLogic.Services;
using IntellaQuest.Web.Controllers.Api;
using System;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers
{
    public class ShoppingCartsController : BaseController
    {
        private readonly IShoppingCartService _shoppingCartService;
        public ShoppingCartsController(IShoppingCartService shoppingCartService)
        {
            _shoppingCartService = shoppingCartService;
        }
        #region User Action

        [HttpPost]
        public ActionResult GetUserShoppingCartWithProducts(Guid userId)
        {
            return Json(_shoppingCartService.GetUserShoppingCartWithProducts(userId));
        }

        [HttpPost]
        public ActionResult AddProductToShoppingCart(Guid userId, Guid productId, int quality = 1)
        {
            _shoppingCartService.AddProductToShoppingCart(userId, productId, quality);
            return Json(true);
        }

        public ActionResult RemoveProductFromShoppingCart(Guid detailsId)
        {
            _shoppingCartService.RemoveProductFromShoppingCart(detailsId);
            return Json(true);
        }

        public ActionResult MinusQuantity(Guid detailsId)
        {
            _shoppingCartService.MinusQuantity(detailsId);
            return Json(true);
        }

        public ActionResult PlusQuantity(Guid detailsId)
        {
            _shoppingCartService.PlusQuantity(detailsId);
            return Json(true);
        }

        #endregion
    }
}