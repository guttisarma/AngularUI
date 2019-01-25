using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TradeBulk_Helper
{
   public class ProductList
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public long Quantity { get; set; }
        public long RemQuantity { get; set; }
        public string Description { get; set; }
        public string CreatedOn { get; set; }
        public bool IsAssign { get; set; }

        #region Assigned
        public string ParentCode { get; set; }
        public string AssignedUser { get; set; }
        #endregion

        #region Converted
        public string ConvertedUser { get; set; }
        public string OwerUser { get; set; }
        #endregion

      public List<ProductList> giveFakeProductList()
      {
      List<ProductList> lspro = new List<ProductList>();
        for (int i=0;i<8;++i)
        {
          ProductList pl = new ProductList()
          {
            Code = "Pro_Code_"+i.ToString(),
            Name = "Pro_Name_" + i.ToString(),
            Quantity = 4+7*i-i,
            RemQuantity = 1,
            Description = "Fine Some Name",
            CreatedOn = DateTime.Now.ToString(),
            IsAssign = false,
            AssignedUser = "Nadal",
            ConvertedUser = "Firoz"
          };
          lspro.Add(pl);
        }
      return lspro;
      }
    }
}
