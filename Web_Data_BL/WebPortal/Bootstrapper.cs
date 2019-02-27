using System.Web.Http.Controllers;
using System.Web.Mvc;
using Microsoft.Practices.Unity;
using TradeBulk_BusinessLayer;
using TradeBulk_Helper;
using TradeBulk_Web.Controllers.WebApi;
using Unity.Mvc3;

namespace TradeBulk_Web
{
  public static class Bootstrapper
  {
    public static void Initialise()
    {
      var container = BuildUnityContainer();

      DependencyResolver.SetResolver(new UnityDependencyResolver(container));
    }

    private static IUnityContainer BuildUnityContainer()
    {
      var container = new UnityContainer();


      container.RegisterType<IProductManagement, ProductManagement>();
      //container.RegisterType<IHttpController, ProductController>("Product");

      // register all your components with the container here
      // it is NOT necessary to register your controllers

      // e.g. container.RegisterType<ITestService, TestService>();            

      return container;
    }
  }
}
