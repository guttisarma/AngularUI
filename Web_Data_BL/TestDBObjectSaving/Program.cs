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
      //ITransactFactory transactFactory = new TransactFactory();
      ProductManagement pro = new ProductManagement();
      bool isSuccess = false;
      NewProductViewModel product = new NewProductViewModel();
      product.ProductName = "Interactive Monitor";
      product.ProductType = "1";
      product.Quantity = "48";
      product.Description = "Touch Screen monitor";      
      //pro.CreateProduct(product, 2,out isSuccess);
       isSuccess = false;

      NewProductViewModel pros = new NewProductViewModel();
      pros.ProductName = "KeyBoard";
      pros.ProductType = "1";
      pros.Quantity = "90";
      pros.Description = "AutoCorrect Keyboard";
      pros.Price = "4000";
     // pro.CreateProduct(pros, 2, out isSuccess);

      NewProductViewModel p1 = new NewProductViewModel();
      p1.ProductName = "CPU";
      p1.ProductType = "2";
      p1.Quantity = "56";
      p1.Description = "Advance AI Products";
      p1.Price = "40000";
      //pro.CreateProduct(p1, 2, out isSuccess);
      #endregion
      isSuccess = false;

      //#region Update Product
      //product.Price = "34540.0";
      //product.Id = 
      //product.Description = "Amount Is Updated";
      //pro.UpdateProduct(product, 1, out isSuccess);
      //isSuccess = false;

      //pros.Price = "6790.0";
      //pros.Quantity = "90";
      //product.Id = "30028";
      //pros.Description = "Here Condition is For every Record having Price should Create InlineTransaction";
      //pro.UpdateProduct(pros, 1, out isSuccess);
      //isSuccess = false;

      //#endregion
      //#region Assignment Product
      Dictionary<long, int> prodDetails = new Dictionary<long, int>();
      prodDetails.Add(13, 4);
      prodDetails.Add(14, 7);
      prodDetails.Add(15, 8);
      //pro.AssignProduct(prodDetails, 2, 0, 0, 3, out isSuccess);
      isSuccess = false;

      //#endregion
      //#region Convert Product
      List<ConvertAssProHelper> convertAssProHelpers = new List<ConvertAssProHelper>();
      convertAssProHelpers.Add(new ConvertAssProHelper() { AssignProductId = 1, lsAssProHelpers=new List<AssProHelper>() {
                                                                                  new AssProHelper() { ProductId = 13, Qunty = 1 },
                                                                                  new AssProHelper() { ProductId = 14, Qunty = 2 },
                                                                                  new AssProHelper() { ProductId = 15, Qunty = 3 }} });

      convertAssProHelpers.Add(new ConvertAssProHelper()
      {
        AssignProductId = 1,
        lsAssProHelpers = new List<AssProHelper>() {
                                                                                  new AssProHelper() { ProductId = 13, Qunty = 3  },
                                                                                  new AssProHelper() { ProductId = 14, Qunty = 2  },
                                                                                  new AssProHelper() { ProductId = 15, Qunty = 1  }}
      });

      
      pro.ConvertProduct(convertAssProHelpers, "EndProd", 0, 0, 3, out isSuccess);
      //#endregion
    }
  }
}
