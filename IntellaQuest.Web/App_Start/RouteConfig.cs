using System.Web.Mvc;
using System.Web.Routing;

namespace IntellaQuest.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            /*routes.MapRoute(
                name: "spa-fallback",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Home" }
            );*/
            routes.MapRoute(
                name: "Default",
                url: "api/{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Home", id = UrlParameter.Optional }
                //,constraints: new { controller = "Identity|Orders|Products|Users|Categories" } // this is basically a regular expression
            );

            routes.MapRoute(
                name: "angular_app",
                url: "{*pathInfo}",
                defaults: new { controller = "Home", action = "Home", id = UrlParameter.Optional },
                namespaces: new[] { "EHSQuest.Web.Controllers" }
            );
        }
    }
}
