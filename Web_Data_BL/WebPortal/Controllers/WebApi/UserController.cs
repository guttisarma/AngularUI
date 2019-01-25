using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using TradeBulk_BusinessLayer;
using TradeBulk_Helper;
using TradeBulk_Helper.Interfaces;
using TradeBulk_Web.Authe_AuthoATION;
using TradeBulk_Web.Models.Administrator;

namespace TradeBulk_Web.Controllers.WebApi
{
    public class UserController : ApiController
    {
        // GET: api/User
        long currentUserPID = -1;
        bool isSuccess = false;
        public UserController()
        {
            currentUserPID = ((CustomPrincipal)HttpContext.Current.User).UserId;
        }
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/User/5
        public string Get(int id)
        {
            return "value";
        }

        
        // POST: api/User
        [HttpPost]
        public void AddAddress(ExAddress exaddress)
        {
            UserManagement userMgnt = new UserManagement(exaddress, currentUserPID);
            UserManagementExten userManagementExten = new UserManagementExten();            
            userMgnt.UpdateUserProfile(userManagementExten.AddAddresses);

        }

        [HttpPost]
        public void AddPhone(ExPhone exPhone)
        {
            UserManagement userMgnt = new UserManagement(exPhone, currentUserPID);
            UserManagementExten userManagementExten = new UserManagementExten();
            userMgnt.UpdateUserProfile(userManagementExten.AddUserPhone);
        }

        [HttpPost]
        public void AddEmail(ExPhone exEmail)
        {
            UserManagement userMgnt = new UserManagement(exEmail, currentUserPID);
            UserManagementExten userManagementExten = new UserManagementExten();
            userMgnt.UpdateUserProfile(userManagementExten.AddUserEmail);

        }
        [HttpGet]
        public IHttpActionResult UsersUndertaken()
        {

          isSuccess = false;
          //Here we need to call Logic for
          UserManagement userMgnt = new UserManagement(currentUserPID);
          List<UserInfo>  userInfos= userMgnt.myUsersList();
          if (isSuccess)
          {
            var response = new
            {

              Success = true,
              Message = "Created",
            };
            return Ok(response);
          }
          else
          {
            var response = new
            {

              Success = false,
              Message = "Retry",
            };
            return Ok(response);
          }
      
        }

        // PUT: api/User/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/User/5
        public void Delete(int id)
        {
        }
    }
}
