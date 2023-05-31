using IntellaQuest.BusinessLogic.Services;
using IntellaQuest.BusinessLogic.ViewModels;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers.Api
{
    public class IdentityController : BaseController
    {
        private readonly IUserService _userService;
        public IdentityController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpPost]
        public ActionResult Registration(UserRegistrationViewModel model)
        {
            if (ModelState.IsValid)
            {
                _userService.Registration(model);
                return Json(new { Success = true });
            }
            return Json(new { success = false });
        }
        [HttpPost]
        public ActionResult Login(UserLoginViewModel model)
        {
            if(ModelState.IsValid)
            {
                var token = _userService.Login(model);
                return Json(new { success = true, token });
            }
            return Json(new { success = false });
        }
    }
}