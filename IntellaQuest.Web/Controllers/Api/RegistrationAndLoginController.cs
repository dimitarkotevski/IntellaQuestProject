using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers.Api
{
    public class RegistrationAndLoginController : BaseController
    {

        public ActionResult Registration()
        {
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
    }
}