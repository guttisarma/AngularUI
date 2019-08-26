using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web;
using System.Web.Http;
using TradeBulk_BusinessLayer;
using TradeBulk_Helper;
using TradeBulk_Helper.Interfaces;
using TradeBulk_Helper.WebAPIhelper;
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
    [HttpPost]
    public void Post()
    {

    }
    // GET: api/User/5
    public string Get(int id)
    {
      return "value";
    }
   
    [HttpPost]
    public HttpResponseMessage ApproveUser([FromBody] RegUser description)
    {
      UserManagement umgnt = new UserManagement();
      umgnt.ApproveUser(description, description.lRegUserid);

      return Request.CreateResponse(HttpStatusCode.Created);
    }

    [HttpPost]
    public HttpResponseMessage UpdateProfilePic()
    {
      Dictionary<string, object> dict = new Dictionary<string, object>();
      var httpRequest = HttpContext.Current.Request;

      foreach (string file in httpRequest.Files)
      {
        HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);

        var postedFile = httpRequest.Files[file];
        if (postedFile != null && postedFile.ContentLength > 0)
        {
          int MaxContentLength = 1024 * 1024 * 1; //Size = 1 MB  
          IList<string> AllowedFileExtensions = new List<string> { ".jpg", ".gif", ".png" };
          var ext = postedFile.FileName.Substring(postedFile.FileName.LastIndexOf('.'));
          var extension = ext.ToLower();
          if (!AllowedFileExtensions.Contains(extension))
          {

            var message = string.Format("Please Upload image of type .jpg,.gif,.png.");

            dict.Add("error", message);
            return Request.CreateResponse(HttpStatusCode.BadRequest, dict);
          }
          else if (postedFile.ContentLength > MaxContentLength)
          {

            var message = string.Format("Please Upload a file upto 1 mb.");

            dict.Add("error", message);
            return Request.CreateResponse(HttpStatusCode.BadRequest, dict);
          }
          else
          {
            var filePath = HttpContext.Current.Server.MapPath("~/Userimage/" + postedFile.FileName + extension);
            postedFile.SaveAs(filePath);
            UserManagement userMgnt = new UserManagement(currentUserPID);
            userMgnt.UpdateUserPic("~/Userimage/" + postedFile.FileName, extension);
          }
        }

        var message1 = string.Format("Image Updated Successfully.");
        return Request.CreateErrorResponse(HttpStatusCode.Created, message1); ;
      }
      var res = string.Format("Please Upload a image.");
      dict.Add("error", res);
      return Request.CreateResponse(HttpStatusCode.NotFound, dict);

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
    public void AddEmail(ExEmail exEmail)
    {
      UserManagement userMgnt = new UserManagement(exEmail, currentUserPID);
      UserManagementExten userManagementExten = new UserManagementExten();
      userMgnt.UpdateUserProfile(userManagementExten.AddUserEmail);

    }

    [HttpPost]
    public void AddBillingDetails(BillingDetails billingdetails)
    {
      UserManagement userMgnt = new UserManagement(currentUserPID);
      userMgnt.UpdateBillingInfo(billingdetails);

    }
    [HttpGet]
    public List<UserInfo> UsersUndertaken()
    {
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
    [HttpGet]
    public IEnumerable<RegUser> GetUnApprovedUsers()
    {
      IEnumerable<RegUser> newUserRegistrationSupports = new List<RegUser>();
      UserManagement userMgnt = new UserManagement();
      newUserRegistrationSupports = userMgnt.listPendingUserApprovals(currentUserPID,true);
      return newUserRegistrationSupports;
    }
    [HttpGet]
    public  RegUser GetUserDetail()
    {
      UserManagement userMgnt = new UserManagement(currentUserPID);
      RegUser regUser=  userMgnt.GetUserDeails();
      return regUser;
    }

    [HttpGet]
    public IEnumerable<RegUser> GetUserList()
    {
      IEnumerable<RegUser> newUserRegistrationSupports = new List<RegUser>();
      UserManagement userMgnt = new UserManagement();
      newUserRegistrationSupports = userMgnt.listPendingUserApprovals(currentUserPID,false);
      return newUserRegistrationSupports;
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
;
