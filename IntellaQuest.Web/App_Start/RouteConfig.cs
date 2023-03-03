using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace IntellaQuest.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                //url: "",
                defaults: new { controller = "Home", action = "Angular2", id = UrlParameter.Optional }
            );
            /*routes.MapRoute(
                name: "default",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Angular2" } // The view that bootstraps Angular 2 app
            );*/
        }
    }
}
