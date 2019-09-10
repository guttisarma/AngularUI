using TradeBulk_Helper;
using TradeBulk_Web.Authe_AuthoATION;
using TradeBulk_BusinessLayer;
#pragma warning disable CS0246 // The type or namespace name 'TradeBulk_DataLayer' could not be found (are you missing a using directive or an assembly reference?)
using TradeBulk_DataLayer.AppData;
#pragma warning restore CS0246 // The type or namespace name 'TradeBulk_DataLayer' could not be found (are you missing a using directive or an assembly reference?)
using TradeBulk_Web.Models.Administrator;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace TradeBulk_Web.Controllers.Adminstrator
{
    public class ManageAdminController : ApiController
    {
        // GET: api/ManageAdmin
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/ManageAdmin/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/ManageAdmin
        //public void Post([FromBody]string value)
        //{
        //}

        public List<NewUserRegistrationSupport> Post(string selectIndex)
        {
            List<NewUserRegistrationSupport> ls = new List<NewUserRegistrationSupport>();
            if (Convert.ToInt32(selectIndex) == 1)
            {
                //Current Users
                TradeBulkEntities db = new TradeBulkEntities();

            }
            else
            {
                ManageAdminHelper MAdminhelper = new ManageAdminHelper();
                ls = MAdminhelper.GetNewUser(); 
             }
            return ls;

        }

        // PUT: api/ManageAdmin/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ManageAdmin/5
        public void Delete(int id)
        {
        }
    }
}
