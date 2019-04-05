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
      product.ProductName = "Interactive Application";
      product.ProductType = "1";
      product.Quantity = "450";
      product.Description = "Touch Screen monitor";      
      //pro.CreateProduct(product, 1,out isSuccess);
       isSuccess = false;

      NewProductViewModel pros = new NewProductViewModel();
      pros.ProductName = "Vitural KeyBoard";
      pros.ProductType = "1";
      pros.Quantity = "900";
      pros.Description = "AutoCorrect Keyboard";
      pros.Price = "4000";
      //pro.CreateProduct(pros, 1, out isSuccess);
      isSuccess = false;

      NewProductViewModel p1 = new NewProductViewModel();
      p1.ProductName = "LED Lights";
      p1.ProductType = "2";
      p1.Quantity = "560";
      p1.Description = "Advance AI Products";
      p1.Price = "40000";
      //pro.CreateProduct(p1, 1, out isSuccess);
      #endregion
      isSuccess = false;

      #region Update Product
      product.Price = "34540.0";
      product.Id =
      product.Description = "Amount Is Updated";
      //pro.UpdateProduct(product, 1, out isSuccess);
      isSuccess = false;

      pros.Price = "6790.0";
      pros.Quantity = "90";
      product.Id = "30028";
      pros.Description = "Here Condition is For every Record having Price should Create InlineTransaction";
      //pro.UpdateProduct(pros, 1, out isSuccess);
      isSuccess = false;

      #endregion
      //#region Assignment Product
      List<AssProHelper> assProHelpers = new List<AssProHelper>();
      Dictionary<long, int> prodDetails = new Dictionary<long, int>();
      assProHelpers.Add(new AssProHelper() { ProductId = 50002, Qunty = 84 });
      assProHelpers.Add(new AssProHelper() { ProductId = 50003, Qunty = 50 });
      assProHelpers.Add(new AssProHelper() { ProductId = 50004, Qunty = 95 });


      pro.AssignProduct(assProHelpers, 1, 0, 0, 3, out isSuccess);
      isSuccess = false;

      //#endregion
      //#region Convert Product
      List<AssProHelper> lsassproHelpers = new List<AssProHelper>() {
                                                                                  new AssProHelper() { ProductId = 40002, Qunty = 1 },
                                                                                  new AssProHelper() { ProductId = 40003, Qunty = 2 },
                                                                                  new AssProHelper() { ProductId = 40004, Qunty = 3 }};
      List<ConvertAssProHelper> convertAssProHelpers = new List<ConvertAssProHelper>();
      convertAssProHelpers.Add(new ConvertAssProHelper() { AssignProductId = 20002, lsAssProHelpers= lsassproHelpers });

      //convertAssProHelpers.Add(new ConvertAssProHelper()
      //{
      //  AssignProductId = 1,
      //  lsAssProHelpers = new List<AssProHelper>() {
      //                                                                            new AssProHelper() { ProductId = 13, Qunty = 3  },
      //                                                                            new AssProHelper() { ProductId = 14, Qunty = 2  },
      //                                                                            new AssProHelper() { ProductId = 15, Qunty = 1  }}
      //});

      pro.ConvertionComplete(20002, lsassproHelpers, false);
      //pro.ConvertProduct(convertAssProHelpers, "EndProd", 0, 0, 3, out isSuccess);
      //#endregion
    }
  }
}
