using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TradeBulk_BusinessLayer;
using TradeBulk_Helper;
using TradeBulk_Helper.Interfaces;

namespace TestDBObjectSaving
{
  class Program
  {
    static void Main(string[] args)
    {
      #region Create Product
      ITransactFactory transactFactory = new TransactFactory();
      ProductManagement pro = new ProductManagement(transactFactory);
      bool isSuccess = false;
      NewProductViewModel product = new NewProductViewModel();
      product.ProductName = "Interactive Monitor";
      product.ProductType = "1";
      product.Quantity = "48";
      product.Description = "Touch Screen monitor";
      pro.CreateProduct(product, 1,out isSuccess);
       isSuccess = false;

      NewProductViewModel pros = new NewProductViewModel();
      pros.ProductName = "KeyBoard";
      pros.ProductType = "1";
      pros.Quantity = "90";
      pros.Description = "AutoCurrect Keyboard";
      pros.Price = "4000";
      pro.CreateProduct(pros, 1, out isSuccess);
      #endregion
      isSuccess = false;

      #region Update Product
      product.Price = "34540.0";
      product.Id = "30027";
      product.Description = "Amount Is Updated";
      pro.UpdateProduct(product, 1, out isSuccess);
      isSuccess = false;

      pros.Price = "6790.0";
      pros.Quantity = "90";
      product.Id = "30028";
      pros.Description = "Here Condition is For every Record having Price should Create InlineTransaction";
      pro.UpdateProduct(pros, 1, out isSuccess);
      isSuccess = false;

      #endregion
      #region Assignment Product
      Dictionary<long, int> prodDetails = new Dictionary<long, int>();
      prodDetails.Add(30020, 20);
      prodDetails.Add(30024, 10);
      prodDetails.Add(30027, 30);
      pro.AssignProduct(prodDetails, 1, 3, out isSuccess);
      isSuccess = false;

      #endregion
      #region Convert Product
      Dictionary<long, int> prodDetailsConvert = new Dictionary<long, int>();
      prodDetailsConvert.Add(25, 20);
      prodDetailsConvert.Add(26, 10);
      prodDetailsConvert.Add(27, 30);
      pro.ConvertProduct(prodDetailsConvert, "EndProd", 3,out isSuccess);
      #endregion
    }
  }
}
