using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using TradeBulk_BusinessLayer;
using TradeBulk_Helper;
using TradeBulk_Web.Authe_AuthoATION;

namespace TradeBulk_Web.Controllers.WebApi
{
    // Allow CORS for all origins. (Caution!)
    public class ProductController : ApiController
    {
        IProductManagement ipromngmt;
        long currentUserID = -1;
        bool isSuccess = false;
        public ProductController()
        {
            try
            {
                
                if (ipromngmt == null)
                {
                    ipromngmt = new ProductManagement();
                    currentUserID = 10001;
                }
                else
                currentUserID = ((CustomPrincipal)HttpContext.Current.User).UserId;
                
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        public ProductController(IProductManagement _ipromngmt=null,long currentUserId=0)
        {
            try
            {
                ipromngmt = _ipromngmt;
                if (ipromngmt == null)
                {
                    ipromngmt = new ProductManagement();
                    currentUserId = 10001;
                }
                else
                {
                    HttpContent requestContent = Request.Content;
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
        [HttpGet]
        public List<ProductList> CreatedAssigneeProduct()
        {
            List<ProductList> lsProList =ipromngmt.MyProductList(currentUserID);
            return lsProList;
        }

        [HttpGet]
        public List<ProductList> AssignedProduct()
        {
            List<ProductList> lsProList =ipromngmt.MyAssignedProductList(currentUserID);
            return lsProList;
        }

        [HttpGet]
        public List<ProductList> ConvertedProduct()
        {
            List<ProductList> lsProList=  ipromngmt.MyCovertedProductList(currentUserID);
            return lsProList;
        }

        // GET: api/Product
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Product/5
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        // POST: api/Product
        public IHttpActionResult CreateProduct(NewProductViewModel newPro)
        {
            isSuccess = false;
            ipromngmt.CreateProduct(newPro,currentUserID,out isSuccess);
            if(isSuccess)
            {
                var response = new
                {

                  Success = true,
                  Message = "Created",
                };
                  return Ok(response);
            }
            else
            {
                  var response = new
                  {

                    Success = false,
                    Message = "Retry",
                  };
                return Ok(response);
            }
        }

        // PUT: api/Product/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Product/5
        public void Delete(int id)
        {
        }
    }
}
