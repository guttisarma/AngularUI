using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace TradeBulk_Helper
{
  public class LoginResponse
  {
    public HttpResponseMessage responseMsg;

    public string Username { get; set; }
    public string Password { get; set; }

  }
}
