using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;
using TradeBulk_BusinessLayer;
using TradeBulk_Helper;
using TradeBulk_Helper.WebAPIhelper;

namespace TradeBulk_Web.Controllers.WebApi
{
  public class UnAuthenticUserController : ApiController
  {

    [HttpPost]
    public IHttpActionResult Registration([FromBody] NewUserRegistrationSupport NewUserDetails)
    {
      int UserId = 0;
      IHttpActionResult response;
      UserManagement UserRegistrationHelp = new UserManagement();
      if (!string.IsNullOrEmpty(NewUserDetails.strFirstName))
        UserRegistrationHelp.SaveNewUserDetails(ref UserId, NewUserDetails);
      if (UserId != 0)
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
      loginResponse.responseMsg = new HttpResponseMessage();
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
    public HttpResponseMessage Authenticate([FromBody] LoginRequest login)
    {
      var loginResponse = new LoginResponse() { };
      IHttpActionResult response;
      bool isUsernamePasswordValid = false;
      UserManagement umgnt = new UserManagement();
      long UserId = 0;
      try
      {
        isUsernamePasswordValid = umgnt.ValidateUser(login.Username, login.Password, out UserId);
        if (isUsernamePasswordValid)
        {
          umgnt = new UserManagement(UserId);
          RegUser regUser = umgnt.GetUserDeails();

          regUser.token= createtoken(login.Username, UserId);
          
          //return the token
          return Request.CreateResponse(HttpStatusCode.OK, regUser);
        }
        else
        {
          // if credentials are not valid send unauthorized status code in response
          loginResponse.responseMsg = Request.CreateErrorResponse(HttpStatusCode.Unauthorized, new Exception("User/Password wrong"));
          response = ResponseMessage(loginResponse.responseMsg);
          return Request.CreateResponse(HttpStatusCode.Unauthorized, new Exception("User/Password wrong"));
        }
      }
      catch (Exception ex)
      {
        var message = string.Format("Source: " + ex.Source + "  InnerException: " + ex.InnerException + "Message: " + ex.Message);
        HttpError err = new HttpError(message);
        return Request.CreateResponse(HttpStatusCode.NotFound, err);

        //loginResponse.responseMsg = Request.CreateErrorResponse(HttpStatusCode.Unauthorized, ex);

        //response = ResponseMessage(loginResponse.responseMsg);
        //return response;
      }
    }

    [NonAction]
    private string createtoken(string username, long UserId)
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

  }
}
