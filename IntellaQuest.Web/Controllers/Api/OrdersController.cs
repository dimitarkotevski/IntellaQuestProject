using IntellaQeust.BusinessLogic.Requests;
using IntellaQeust.BusinessLogic.ViewModels;
using IntellaQuest.BusinessLogic.Services;
using IntellaQuest.Web.Controllers.Api;
using System;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers
{
    public class OrdersController : BaseController
    {
        private readonly IOrderService _orderService;

        public OrdersController(IOrderService orderService)
        {
            _orderService = orderService;
        }
        #region ADMIN ACTION

        [HttpPost]
        public ActionResult All(RequestModel request)
        {
            return Json(_orderService.GetAll(request));
        }
        [HttpPost]
        public ActionResult Get(Guid Id)
        {
            return Json( _orderService.Get(Id));
        }
        [HttpPost]
        public ActionResult Create(OrderViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(ModelState.Values);
            }
            _orderService.Create(model);
            return Json(new { success = true });
        }
        [HttpPost]
        public ActionResult Edit(OrderViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(ModelState.Values);
            }
            _orderService.Update(model);
            return Json(new { success = true });
        }
        [HttpPost]
        public ActionResult Delete(Guid Id)
        {
            _orderService.Delete(Id);
            return Json(new { success = true });
        }
        
        #endregion

        #region USER ACTION

        [HttpPost]
        public ActionResult GetUserActiveOrder(Guid userId)
        {
            var result = _orderService.GetUserActiveOrder(userId);
            return Json(result);
        }
        [HttpPost]
        public ActionResult GetUserNotActiveOrders(Guid userId)
        {
            var result = _orderService.GetUserNotActiveOrders(userId);
            return Json(result);
        }

        public ActionResult CancelActiveOrder(Guid orderId)
        {
            _orderService.CancelActiveOrder(orderId);
            return Json(true);
        }

        public ActionResult MakeAnOrder(Guid shoppingCartId,Guid userId)
        {
            _orderService.MakeAnOrder(shoppingCartId, userId); 
            return Json(new { success = true });
        }

        public ActionResult MakeAPay(OrderViewModel model)
        {
            _orderService.MakeAPay(model);
            return Json(new { success = true });
        }

        #endregion
    }
}
