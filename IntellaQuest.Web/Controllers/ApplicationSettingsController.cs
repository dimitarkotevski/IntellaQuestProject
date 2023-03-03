using System;
using System.Web.Mvc;
namespace ShopApp.Web.Controllers
{
    public class ApplicationSettingsController : Controller
    {
        // GET: ApplicationSettings
        public ActionResult Index()
        {
            return View("Index2");
        }
        public ActionResult Dashboard()
        {
            return View("Index2");
        }
        public ActionResult GetApplicationContext()
        {
            var model = new
            {
                SiteKey = "",
                CurrentSiteDefaultCurrency = new { },
                CurrentSiteCurrencySymbol = new { },
                CurrentSiteISOCurrencySymbol = new { },
                ModuleType = "yeah",
                CurrentUser = new { },
                CurrentSite = new { },
                CurrentLanguage = new { },
                ActiveModules = new object[1],
                AvailableLanguages = new object[1] { new { ShortTitle = "US" } },
                ApplicationSettings = new { },
                SiteSettings = new { },
                ModuleSettings = new { },
                SystemTime = DateTime.UtcNow,
                CurrentYear = DateTime.Now.Year,
                AllApps = new { },
                OrderedApps = new { },
                CollaborationPortalUrl = ""
            }; return Json(model);
        }
    }
}