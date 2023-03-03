using System;
using System.Linq;
using System.Net;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers.Api
{
    public class BaseController : Controller
    {
        protected override void OnException(ExceptionContext filterContext)
        {
            if (!filterContext.ExceptionHandled)
            {
                filterContext.HttpContext.Response.StatusCode = (int)HttpStatusCode.Conflict;
                filterContext.Result = new JsonResult
                {
                    Data = new { success = false, exception = filterContext.Exception.Message }
                };
                filterContext.ExceptionHandled = true;
            }
            else
            {
                base.OnException(filterContext);
            }
        }
        public ActionResult ErrorNotAcceptable()
        {
            Response.StatusCode = (int)HttpStatusCode.BadRequest;
            var errors = ModelState.ToDictionary(kvp => kvp.Key, kvp => kvp.Value.Errors.Select(e => e.ErrorMessage).ToArray());

            return new JsonResult
            {
                Data = new { Success = false, Errors = errors },
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };
        }

        public JsonResult GetAppContext()
        {
            return Json(new
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
            });
        }
    }
}