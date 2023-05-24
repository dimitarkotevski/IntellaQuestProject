using IntellaQeust.BusinessLogic.Requests;
using IntellaQuest.BusinessLogic.Services;
using IntellaQuest.BusinessLogic.ViewModels;
using IntellaQuest.Web.Controllers.Api;
using System;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers
{
    public class UsersController : BaseController
    {
        private readonly IUserService _usersService;
        public UsersController() { }
        public UsersController(IUserService usersService)
        {
            _usersService = usersService;
        }

        // GET: Users
        [HttpPost]
        public ActionResult All(RequestModel request)
        {
            return Json(_usersService.GetAll(request));
        }

        // GET: Users/Details/5
        [HttpPost]
        public ActionResult Get(Guid id)
        {
            return Json(_usersService.Get(id));
        }

        // GET: Users/Create
        [HttpPost]
        public ActionResult Create(UserViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(ModelState.Values);
            }
            _usersService.Create(model);
            return Json(new { success = true });
        }
        // GET: Users/Edit
        [HttpPost]
        public ActionResult Edit(UserViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(ModelState.Values);
            }
            _usersService.Update(model);
            return Json(new { success = true });
        }
        //POST Users/DeleteById/5
        [HttpPost]
        public ActionResult Delete(Guid id)
        {
            _usersService.Delete(id);
            return Json(new { success = true });
        }
    }
}
