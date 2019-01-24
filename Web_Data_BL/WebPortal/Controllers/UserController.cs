using TradeBulk_Web.CustomAuthentication;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TradeBulk_Web.Controllers
{
   
        [CustomAuthorize(Roles = "User")]
        public class UserController : Controller
        {
            private CurrentUser CUser;
            public UserController()
            {
            if (Response.Cookies != null)
            {
                CUser = new CurrentUser();
                if (Response.Cookies.AllKeys.Contains("LoginUserPID"))
                {
                    CUser.UserPID = Response.Cookies["LoginUserPID"].Value;
                }
                if (Response.Cookies.AllKeys.Contains("IsAdmin"))
                {
                    CUser.IsAdmin = Convert.ToBoolean(Response.Cookies["IsAdmin"].Value);
                }
            }
        }
            // GET: User  
            public ActionResult Index()
            {
                return View();
            }
            //[HttpGet]
            //public ActionResult GetAuction()
            //{
                
            //}
        }
    
}