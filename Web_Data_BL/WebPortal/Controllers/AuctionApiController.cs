using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;

namespace TradeBulk_Web.Controllers
{
    public class AuctionApiController : ApiController
    {
#pragma warning disable CS0169 // The field 'AuctionApiController.CUser' is never used
        private CurrentUser CUser;
#pragma warning restore CS0169 // The field 'AuctionApiController.CUser' is never used
        public AuctionApiController()
        {
            //int UserId = ((TradeBulk_Web.Authe_AuthoATION.CustomPrincipal)((System.Web.HttpContext)Context).User).UserId;
            //CUser = new CurrentUser();
            //CookieHeaderValue c= Request.Headers.GetCookies("LoginUserPID").FirstOrDefault();
            // CUser.IsAdmin = Convert.ToBoolean(Request.Headers.GetCookies("IsAdmin").Value);
        }
        // GET: api/AuctionApi
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/AuctionApi/5
        public string Get(int id)
        {
            return "value";
        }

        //// POST: api/AuctionApi
        //public void Post([FromBody]string value)
        //{
        //}
        // POST: api/AuctionApi
        public void Post(string AmtAuction)
        {

        }

        // PUT: api/AuctionApi/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/AuctionApi/5
        public void Delete(int id)
        {
        }
    }
}
