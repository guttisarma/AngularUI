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
      //if the Requested for Userlogin we should pass it
      if (!(HttpContext.Current.Request.CurrentExecutionFilePath == @"/api/User/Authenticate" ||
        HttpContext.Current.Request.CurrentExecutionFilePath == @"/api/User/Registration"))
      {
        isFakeData = Convert.ToBoolean(ConfigurationManager.AppSettings["DummyDataForAPI"]);
        if (!isFakeData)
        {
          currentUserPID = ((CustomPrincipal)HttpContext.Current.User).UserId;
        }
      }
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
    [NonAction]
    private string createToken(string username, long UserId)
    {
      //Set issued at date
      DateTime issuedAt = DateTime.UtcNow;
      //set the time when it expires
      DateTime expires = DateTime.UtcNow.AddDays(7);

      //http://stackoverflow.com/questions/18223868/how-to-encrypt-jwt-security-token
      var tokenHandler = new JwtSecurityTokenHandler();

      //create a identity and add claims to the user which we want to log in
      ClaimsIdentity claimsIdentity = new ClaimsIdentity(new[]
      {
                new Claim("UserName", username),

                new Claim("UserID",UserId.ToString())
            });

      const string sec = "401b09eab3c013d4ca54922bb802bec8fd5318192b0a75f201d8b3727429090fb337591abd3e44453b954555b7a0812e1081c39b740293f765eae731f5a65ed1";
      var now = DateTime.UtcNow;
      var securityKey = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(System.Text.Encoding.Default.GetBytes(sec));
      var signingCredentials = new Microsoft.IdentityModel.Tokens.SigningCredentials(securityKey, Microsoft.IdentityModel.Tokens.SecurityAlgorithms.HmacSha256Signature);


      //create the jwt
      var token =
          (JwtSecurityToken)
              tokenHandler.CreateJwtSecurityToken(issuer: "http://localhost:50191", audience: "http://localhost:50191",
                  subject: claimsIdentity, notBefore: issuedAt, expires: expires, signingCredentials: signingCredentials);
      var tokenString = tokenHandler.WriteToken(token);

      return tokenString;
    }


    [HttpPost]
    public IHttpActionResult Authenticate([FromBody] LoginRequest login)
    {
      var loginResponse = new LoginResponse { };

      IHttpActionResult response;
      bool isUsernamePasswordValid = false;
      UserManagement umgnt = new UserManagement();
      long UserId = 0;
      try
      {
        isUsernamePasswordValid = umgnt.ValidateUser(login.Username, login.Password, out UserId);
        if (isUsernamePasswordValid)
        {
          string token = createToken(login.Username, UserId);
          //return the token
          return Ok<string>(token);
        }
        else
        {
          // if credentials are not valid send unauthorized status code in response
          loginResponse.responseMsg = Request.CreateErrorResponse(HttpStatusCode.Unauthorized, new Exception("User/Password wrong"));

          response = ResponseMessage(loginResponse.responseMsg);
          return response;
        }
      }
      catch (Exception ex)
      {
        loginResponse.responseMsg = Request.CreateErrorResponse(HttpStatusCode.Unauthorized, new Exception("Some exception "+ex.Message));

        response = ResponseMessage(loginResponse.responseMsg);
        return response;
      }      
    }
    [HttpPost]
    public IHttpActionResult IsUserExists([FromBody] LoginRequest login)
    {
      var loginResponse = new LoginResponse { };
      IHttpActionResult response;

      if (string.IsNullOrEmpty(login.Username))
      {
        loginResponse.responseMsg.StatusCode = HttpStatusCode.NotFound;
        response = ResponseMessage(loginResponse.responseMsg);
        return response;
      }

      bool isUsernamePasswordValid = false;
      UserManagement umgnt = new UserManagement();
      long UserId = 0;
      isUsernamePasswordValid = umgnt.isUserExists(login.Username, out UserId);
      if (isUsernamePasswordValid)
      {
        //return the token
        return Ok<string>(UserId.ToString());
      }
      else
      {
        // if credentials are not valid send unauthorized status code in response
        loginResponse.responseMsg.StatusCode = HttpStatusCode.Unauthorized;
        response = ResponseMessage(loginResponse.responseMsg);
        return response;
      }
    }
    [HttpPost]
    public IHttpActionResult Registration([FromBody] NewUserRegistrationSupport NewUserDetails)
    {
      string UserCode=string.Empty;
      IHttpActionResult response;
      UserManagement UserRegistrationHelp = new UserManagement();
      if(!string.IsNullOrEmpty(NewUserDetails.strFirstName))
      UserRegistrationHelp.SaveNewUserDetails(NewUserDetails,ref UserCode);
      if(!string.IsNullOrEmpty(UserCode))
      {
        response = ResponseMessage(new HttpResponseMessage());
        return response;
      }
      else
      {
        return BadRequest("Unable to create New User");
      }
      
    }

    [HttpPost]
    public IHttpActionResult ResetPassword([FromBody] LoginRequest login)
    {
      var loginResponse = new LoginResponse { };

      IHttpActionResult response;
      bool isUsernamePasswordValid = false;
      UserManagement umgnt = new UserManagement();
      long UserId = 0;
      isUsernamePasswordValid = umgnt.ResetPassword(login.Username, login.Password, out UserId);
      if (isUsernamePasswordValid)
      {
        return Ok<bool>(isUsernamePasswordValid);
      }
      else
      {
        // if credentials are not valid send unauthorized status code in response
        loginResponse.responseMsg.StatusCode = HttpStatusCode.Unauthorized;
        response = ResponseMessage(loginResponse.responseMsg);
        return response;
      }

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
      if (isFakeData)
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
