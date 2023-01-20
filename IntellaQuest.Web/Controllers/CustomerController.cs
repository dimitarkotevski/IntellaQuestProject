using IntellaQeust.BusinessLogic.Services;
using IntellaQuest.BusinessLogic.Models;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers
{
    public class CustomerController : Controller
    {
        private readonly ICustomerService _customerService;
        public CustomerController() { }

        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        // GET: Customer
        [System.Web.Http.HttpGet]
        public ActionResult All()
        {
            var models = _customerService.GetAll();
            return Json(models, JsonRequestBehavior.AllowGet);
        }

        // GET: Customer/Details/5
        [HttpGet]
        public ActionResult Get(Guid id)
        {
            var model=_customerService.Get(id);
            return Json(model,JsonRequestBehavior.AllowGet);
        }

        // GET: Customer/Create
        [HttpPost]
        public ActionResult Create(CustomerViewModel model)
        {
            var customer = _customerService.Create(model);
            return Json(customer, JsonRequestBehavior.AllowGet);
        }
        // GET: Customer/Edit
        [HttpPost]
        public void Edit(CustomerViewModel model)
        {
            _customerService.Update(model);
        }

        // GET: Customer/Delete
        [HttpPost]
        public void Delete(CustomerViewModel model)
        {
            _customerService.Delete(model);
        }
        //POST Customer/DeleteById/5
        [HttpPost]
        public void DeleteById(Guid id)
        {
            _customerService.Delete(id);
        }

    }
}
