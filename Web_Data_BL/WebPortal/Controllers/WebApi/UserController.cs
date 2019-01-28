using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
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
    bool isFakeData;

    public UserController()
    {
      isFakeData = Convert.ToBoolean(ConfigurationManager.AppSettings["DummyDataForAPI"]);
      if (!isFakeData)
      {
        currentUserPID = ((CustomPrincipal)HttpContext.Current.User).UserId;
      }
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
    public List<UserInfo> UsersUndertaken()
    {
      if(isFakeData)
      {
        UserInfo u = new UserInfo();
        var response = new
        {

          Success = true,
          Message = JsonConvert.SerializeObject(u.GetFakeUserInfos())
        };
        return u.GetFakeUserInfos();
      }
      isSuccess = false;
      //Here we need to call Logic for
      UserManagement userMgnt = new UserManagement(currentUserPID);
      List<UserInfo> userInfos = userMgnt.myUsersList();
      if (isSuccess)
      {
        var response = new
        {

          Success = true,
          Message = "Created",
        };
        return userInfos;
      }
      else
      {
        var response = new
        {

          Success = false,
          Message = "Retry",
        };
        return userInfos;
      }

    }

    //[HttpGet]
    //public List<ExPhone> GetExPhones()
    //{
    //  UserManagement userMgnt = new UserManagement( currentUserPID);
    //  UserManagementExten userManagementExten = new UserManagementExten();
    // List<ExPhone> lsexPhones=  userMgnt.GetUserProfileInfo(userManagementExten.GetUserPhone);

    //}

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
