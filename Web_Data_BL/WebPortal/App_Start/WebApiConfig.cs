using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Routing;
using TradeBulk_Web.App_Start;

namespace TradeBulk_Web
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            string origin = "http://localhost:4200/";

            EnableCorsAttribute cors = new EnableCorsAttribute(origin, "*", "GET,POST");
            config.EnableCors(cors);
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

      var constraintResolver = new DefaultInlineConstraintResolver();
      constraintResolver.ConstraintMap.Add("AngularRequest", typeof(AngularRequest));
      //config.MapHttpAttributeRoutes(constraintResolver);

      config.Routes.MapHttpRoute(
                name: "DefaultActionApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

        }
    }
}
