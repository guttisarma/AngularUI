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
      product.ProductName = "Sample product";
      product.ProductType = "1";
      product.Quantity = "80";
      product.Description = "Sample description";
      pro.CreateProduct(product, 10001,out isSuccess);
     
      NewProductViewModel pros = new NewProductViewModel();
      pros.ProductName = "Sample product";
      pros.ProductType = "1";
      pros.Quantity = "80";
      pros.Description = "Sample description";
      pros.Price = "67000";
      pro.CreateProduct(pros, 10001, out isSuccess);
      #endregion

      #region Update Product
      product.Price = "3454.0";
      product.Description = "Amount Is Updated";
      pro.UpdateProduct(product, 10001, out isSuccess);
      pros.Price = "5400.0";
      pros.Description = "Amount Is Updated.Hope Transaction Should be created";
      pro.UpdateProduct(pros, 10001, out isSuccess);
      #endregion
    }
  }
}
