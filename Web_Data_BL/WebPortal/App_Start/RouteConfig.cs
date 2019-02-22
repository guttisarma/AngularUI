using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Routing;
using System.Web.Mvc;
using System.Web.Routing;
using TradeBulk_Web.App_Start;

namespace TradeBulk_Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("ng-{controller}");
            routes.MapRoute(
                      name: "Default",
                      url: "{controller}/{action}/{id}",
                      
                      defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
                  );
              }
    }
}
