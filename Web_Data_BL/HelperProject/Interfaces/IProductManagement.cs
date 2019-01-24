using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TradeBulk_Helper
{
    public interface IProductManagement
    {
        List<NewProductViewModel> GetCurrentUserProductList(int CurrentUserID, int CurrentPage, int PageSize, out long TotalPages);
        NewProductViewModel GetProductbyId(int id);
        List<NewProductViewModel> GetOnlineProducts(int CurrentPage, int PageSize, out long TotalPages);
        string GenProductCode(string action);
        void CreateProduct(NewProductViewModel product, long CurrentUserID,out bool IsSuccess);
        void ConvertProduct(Dictionary<long, int> lsProduct, string prodName, long CurrentUserId);
        void AssignProduct(Dictionary<long, int> lsProduct, long CurrentUserId, long AssigneeUserId);
        List<ProductList> MyProductList(long currentUserID);
        List<ProductList> MyAssignedProductList(long currentUserID);
        List<ProductList> MyCovertedProductList(long currentUserID);
    }
}
