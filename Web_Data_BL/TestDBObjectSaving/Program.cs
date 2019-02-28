using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TradeBulk_BusinessLayer;
using TradeBulk_Helper;

namespace TestDBObjectSaving
{
  class Program
  {
    static void Main(string[] args)
    {
      ProductManagement pro = new ProductManagement();
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

    }
  }
}
