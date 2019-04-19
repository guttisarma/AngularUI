using System;
using System.Collections.Generic;
using System.Configuration;
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
    bool isFakeData;
    public ProductController()
    {
      try
      {
        isFakeData = Convert.ToBoolean(ConfigurationManager.AppSettings["DummyDataForAPI"]);
        if (!isFakeData)
        {
          if (ipromngmt == null)
          {
            ipromngmt = new ProductManagement();
            currentUserID = 10001;
          }
          else
            currentUserID = ((CustomPrincipal)HttpContext.Current.User).UserId;
        }
      }
      catch (Exception ex)
      {

        throw ex;
      }
    }
    //public ProductController(IProductManagement _ipromngmt = null, long currentUserId = 0)
    public ProductController(IProductManagement _ipromngmt)
    {
      try
      {
        ipromngmt = _ipromngmt;
        if (ipromngmt == null)
        {
          ipromngmt = new ProductManagement();
          currentUserID = 10001;
        }
        else
        {
          //HttpContent requestContent = Request.Content;
        }
      }
      catch (Exception ex)
      {

        throw ex;
      }
    }

    [HttpPost]
    public NewProductViewModel GetProduct(int ProductId)
    {
      NewProductViewModel newProductViewModel = ipromngmt.GetProductbyId(ProductId);
      return newProductViewModel;
    }

    #region List of products created Assigned and converted
    [HttpGet]
    [Authorize]
    public List<ProductList> CreatedAssigneeProduct()
    {
      List<ProductList> lsProList = ipromngmt.MyProductList(currentUserID);
      return lsProList;
    }

    [HttpGet]
    public List<ProductList> AssignedProduct()
    {
      List<ProductList> lsProList;
      if (!isFakeData)
      {
        lsProList = ipromngmt.MyAssignedProductList(currentUserID);
        return lsProList;
      }
      else
      {
        ProductList productList = new ProductList();
        lsProList = productList.giveFakeProductList();
        return lsProList;
      }

    }

    [HttpGet]
    public List<ProductList> ConvertedProduct()
    {
      List<ProductList> lsProList;
      if (!isFakeData)
      {
        lsProList = ipromngmt.MyCovertedProductList(currentUserID);
        return lsProList;
      }
      else
      {
        ProductList productList = new ProductList();
        lsProList = productList.giveFakeProductList();
        return lsProList;
      }
    }
    #endregion

    #region Action part for Products
    [HttpPost]
    // POST: api/Product
    public IHttpActionResult CreateProduct(NewProductViewModel newPro)
    {
      isSuccess = false;
      ipromngmt.CreateProduct(newPro, currentUserID, out isSuccess);
      if (isSuccess)
      {
        var response = new
        {
          Success = true,
          Message = "Created",
        };
        return Ok(newPro);
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

    [HttpPost]
    public IHttpActionResult AssignProduct(List<AssProHelper> lsproducts, long AssignedUserPid)
    {
      isSuccess = false;
      List<AssProHelper> assProd = new List<AssProHelper>();
      foreach (var aPro in lsproducts)
      {
        assProd.Add(new AssProHelper() { ProductId= aPro.ProductId, Qunty=aPro.Qunty });
      }
      Decimal AdvAmount = 0;
      Decimal TotalAmount = 0;
      ipromngmt.AssignProduct(assProd, currentUserID, AdvAmount, TotalAmount, AssignedUserPid, out isSuccess);
      if (isSuccess)
      {
        var response = new
        {
          Success = true,
          Message = "Assigned",
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

    [HttpPost]
    public IHttpActionResult ConvertProduct(List<ConvertAssProHelper> lsproducts, string NewProductName)
    {
      isSuccess = false;
      //List<ConvertAssProHelper> conProd = new List<ConvertAssProHelper>();
      //foreach (var aPro in lsproducts)
      //{
      //  conProd.Add(new ConvertAssProHelper() { AssignProductId= aPro.AssignProductId, aPro.Count });
      //}
      Decimal AdvAmount=0;
      Decimal TotalAmount =0;
      ipromngmt.ConvertProduct(lsproducts, NewProductName,  AdvAmount,  TotalAmount, currentUserID, out isSuccess);
      if (isSuccess)
      {
        var response = new
        {
          Success = true,
          Message = "Converted",
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

    [HttpPut]
    public IHttpActionResult UpdateProduct(NewProductViewModel newPro)
    {
      isSuccess = false;
      ipromngmt.CreateProduct(newPro, currentUserID, out isSuccess);
      if (isSuccess)
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
    #endregion
  }
}
