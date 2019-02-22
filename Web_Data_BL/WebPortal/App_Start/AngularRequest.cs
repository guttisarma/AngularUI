using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http.Routing;

namespace TradeBulk_Web.App_Start
{
  public class AngularRequest : IHttpRouteConstraint
  {
    public bool Match(HttpRequestMessage request, IHttpRoute route, string parameterName,
      IDictionary<string, object> values, HttpRouteDirection routeDirection)
    {

      object value;
      if (values.TryGetValue(parameterName, out value) && value != null)
      {
        if(((string)value).StartsWith("Ng_"))
        {
          return false;
        }
      }
      return true;      
    }
  }
}

