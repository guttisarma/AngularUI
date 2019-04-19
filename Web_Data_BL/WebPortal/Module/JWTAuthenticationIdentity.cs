using System.Security.Principal;

namespace TradeBulk_Web.Module
{
  public class JWTAuthenticationIdentity : GenericIdentity
  {

    public string UserName { get; set; }
    public int UserId { get; set; }

    public JWTAuthenticationIdentity(string userName)
        : base(userName)
    {
      UserName = userName;
    }


  }
}
