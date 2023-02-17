using FluentNHibernate.Mapping;
using IntellaQeust.BusinessLogic.Requests;
using IntellaQeust.BusinessLogic.Services;
using IntellaQuest.BusinessLogic.Models;
using IntellaQuest.Web.Controllers.Api;
using System;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers
{
    public class CustomersController : BaseController
    {
        private readonly ICustomerService _customersService;
        public CustomersController() { }
        public CustomersController(ICustomerService customersService)
        {
            _customersService = customersService;
        }

        // GET: Customers
        [HttpPost]
        public ActionResult All(RequestModel request)
        {
            return Json(_customersService.GetAll(request));
        }

        // GET: Customer/Details/5
        [HttpPost]
        public ActionResult Get(Guid id)
        {
            return Json(_customersService.Get(id));
        }

        // GET: Customer/Create
        [HttpPost]
        public ActionResult Create(CustomerViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(ModelState.Values);
            }
            _customersService.Create(model);
            return Json(new { success = true });
        }
        // GET: Customer/Edit
        [HttpPost]
        public ActionResult Edit(CustomerViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(ModelState.Values);
            }
            _customersService.Update(model);
            return Json(new { success = true });
        }
        //POST Customers/DeleteById/5
        [HttpPost]
        public ActionResult Delete(Guid id)
        {
            _customersService.Delete(id);
            return Json(new { success = true });
        }
    }
}
