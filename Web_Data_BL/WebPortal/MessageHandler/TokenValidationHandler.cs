using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using TradeBulk_Web.Authe_AuthoATION;

namespace TradeBulk_Web.MessageHandler
{
  internal class TokenValidationHandler : DelegatingHandler
  {
    private static bool TryRetrieveToken(HttpRequestMessage request, out string token)
    {
      token = null;
      IEnumerable<string> authzHeaders;
      if (!request.Headers.TryGetValues("Authorization", out authzHeaders) || authzHeaders.Count() > 1)
      {
        return false;
      }
      var bearerToken = authzHeaders.ElementAt(0);
      token = bearerToken.StartsWith("Bearer ") ? bearerToken.Substring(7) : bearerToken;
      return true;
    }

    protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
    {
      HttpStatusCode statusCode;
      string token;
      List<string> ignoreURLAuthentication = new List<string>();
      ignoreURLAuthentication.Add(@"/api/unauthenticuser/authenticate");
      ignoreURLAuthentication.Add(@"/api/unauthenticuser/registration");
      ignoreURLAuthentication.Add(@"/api/unauthenticuser/isuserexists");
      ignoreURLAuthentication.Add(@"/api/unauthenticuser/resetpassword");

      //determine whether a jwt exists or not
      if (!TryRetrieveToken(request, out token))
      {
        //allow requests with no token - whether a action method needs an authentication can be set with the claimsauthorization attribute
        if (ignoreURLAuthentication.Contains(request.RequestUri.LocalPath.ToLower()))
          return base.SendAsync(request, cancellationToken);
        else
        {
          statusCode = HttpStatusCode.Unauthorized;
          return Task<HttpResponseMessage>.Factory.StartNew(() => new HttpResponseMessage(statusCode) { });
        }
      }
      //if (token == "null") //this pass is for User Athentication
      //{
      //  return base.SendAsync(request, cancellationToken);
      //}
      try
      {
        const string sec = "401b09eab3c013d4ca54922bb802bec8fd5318192b0a75f201d8b3727429090fb337591abd3e44453b954555b7a0812e1081c39b740293f765eae731f5a65ed1";
        var now = DateTime.UtcNow;
        var securityKey = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(System.Text.Encoding.Default.GetBytes(sec));


        SecurityToken securityToken;
        JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
        TokenValidationParameters validationParameters = new TokenValidationParameters()
        {
          ValidAudience = "http://localhost:50191",
          ValidIssuer = "http://localhost:50191",
          ValidateLifetime = false,
          ValidateIssuerSigningKey = true,
          LifetimeValidator = this.LifetimeValidator,
          IssuerSigningKey = securityKey
        };

        //extract and assign the user of the jwt
        System.Security.Claims.ClaimsPrincipal claimsPrincipal = handler.ValidateToken(token, validationParameters, out securityToken);
        IEnumerable<System.Security.Claims.ClaimsIdentity> claimsIdentities = claimsPrincipal.Identities;

        var x = claimsIdentities.ToList()[0];
        var y = x.Claims.ToList()[0];
        var UserID = x.Claims.ToList()[1].Value;
        CustomPrincipal principal = new CustomPrincipal(x.Claims.ToList()[0].Value);
        principal.UserId = Convert.ToInt32(x.Claims.ToList()[1].Value);
        HttpContext.Current.User = principal;
        Thread.CurrentPrincipal = principal;

        return base.SendAsync(request, cancellationToken);
      }
      catch (SecurityTokenValidationException e)
      {
        statusCode = HttpStatusCode.Unauthorized;
      }
      catch (Exception ex)
      {
        statusCode = HttpStatusCode.InternalServerError;
      }
      return Task<HttpResponseMessage>.Factory.StartNew(() => new HttpResponseMessage(statusCode) { });
    }

    public bool LifetimeValidator(DateTime? notBefore, DateTime? expires, SecurityToken securityToken, TokenValidationParameters validationParameters)
    {
      if (expires != null)
      {
        if (DateTime.UtcNow < expires) return true;
      }
      return false;
    }


  }
}
