using TradeBulk_Helper;
using TradeBulk_Web.Models.Administrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using TradeBulk_Web.Authe_AuthoATION;
using System.Web;
using TradeBulk_BusinessLayer;

namespace TradeBulk_Web.Controllers.Adminstrator
{
    public class NewUserRegistrationController : ApiController
    {
        long currentUserID;
        public NewUserRegistrationController()
        {
            currentUserID = ((CustomPrincipal)HttpContext.Current.User).UserId;
        }
        // GET: api/NewUserRegistration
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/NewUserRegistration/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/NewUserRegistration
        [HttpPost]
        public void Post(NewUserRegistrationSupport NewUserDetails)
        {
            UserManagement UserRegistrationHelp = new UserManagement(this.currentUserID);
           // UserRegistrationHelp.SaveNewUserDetails(NewUserDetails);
        }
        [Route("api/NewUserRegistration/ApproveUser")]
        [HttpPost]
         //public void Post (FormDataCollection form )
        public void Post([FromUri] string Id,[FromUri]  string Description)
        {
           
            
            //Description = form.Get("Description");
            //Id = form.Get("Id");
            UserManagement UserRegistrationHelp = new UserManagement(this.currentUserID);
            UserRegistrationHelp.ApprovedUser(Description,Id);
        }

        // PUT: api/NewUserRegistration/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/NewUserRegistration/5
        public void Delete(int id)
        {
        }
    }
}
