using IntellaQeust.BusinessLogic.Services;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers
{
    public class HomeController : Controller
    {

        private readonly ICustomerService _customerService;

        public HomeController(ICustomerService customerService)
        {
            _customerService = customerService;
        }
        public ActionResult Index()
        {
            var models = _customerService.GetAll();
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}