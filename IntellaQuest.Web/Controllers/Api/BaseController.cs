using System.Linq;
using System.Net;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers.Api
{
    public class BaseController : Controller
    {
        protected override void OnException(ExceptionContext filterContext)
        {
            if (!filterContext.ExceptionHandled )
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
    }
}