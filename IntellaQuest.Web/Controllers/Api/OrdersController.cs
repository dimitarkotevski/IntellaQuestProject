using IntellaQeust.BusinessLogic.Orders;
using IntellaQeust.BusinessLogic.Requests;
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

        // POST: Orders
        [HttpPost]
        public ActionResult All(RequestModel request)
        {
            return Json(_orderService.GetAll(request));
        }
        // POST: Orders/Get
        [HttpPost]
        public ActionResult Get(Guid Id)
        {
            return Json( _orderService.Get(Id));
        }

        // POST: Orders/Create
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

        // POST: Orders/Edit/5
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

        // GET: Orders/Delete/5
        [HttpPost]
        public ActionResult Delete(Guid Id)
        {
            _orderService.Delete(Id);
            return Json(new { success = true });
        }

    }
}
