using TradeBulk_Helper;
using TradeBulk_Web.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace TradeBulk_Web.Controllers.Adminstrator
{
    //not requried 801
    public class NewProductController : ApiController
    {
        // GET: api/NewProduct
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/NewProduct/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/NewProduct
        public void Post(NewProductViewModel  Product)
        {
        }

        // PUT: api/NewProduct/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/NewProduct/5
        public void Delete(int id)
        {
        }
    }
}
