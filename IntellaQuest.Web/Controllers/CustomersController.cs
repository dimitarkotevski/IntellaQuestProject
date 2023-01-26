using IntellaQeust.BusinessLogic.Services;
using IntellaQuest.BusinessLogic.Models;
using System;
using System.Linq;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers
{
    public class CustomersController : Controller
    {
        private readonly ICustomersService _customersService;
        public CustomersController() { }
        public CustomersController(ICustomersService customersService)
        {
            _customersService = customersService;
        }

        // GET: Customers
        [HttpPost]
        public ActionResult All()
        {
            return Json(_customersService.GetAll());
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
            return Json(_customersService.Create(model));
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
            return Json(true);
        }

        // GET: Customer/Delete
        [HttpPost]
        public void Delete(CustomerViewModel model)
        {
            if(!ModelState.IsValid)
            {
                Json(ModelState.Values);
            }
            _customersService.Delete(model);
        }
        //POST Customers/DeleteById/5
        [HttpPost]
        public void DeleteById(Guid id)
        {
            _customersService.Delete(id);
        }

    }
}
