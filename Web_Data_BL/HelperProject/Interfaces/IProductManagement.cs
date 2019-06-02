using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TradeBulk_Helper.WebAPIhelper;

namespace TradeBulk_Helper
{
    public interface IProductManagement
    {
        List<NewProductViewModel> GetCurrentUserProductList(int CurrentUserID, int CurrentPage, int PageSize, out long TotalPages);
        NewProductViewModel GetProductbyId(int id);
        List<NewProductViewModel> GetOnlineProducts(int CurrentPage, int PageSize, out long TotalPages);
        string GenProductCode(string action);
        void CreateProduct(CreProd product, long CurrentUserID,out bool IsSuccess);
        void ConvertProduct(List<ConvertAssProHelper> LSconvertAssProHelpers, string prodName, Decimal AdvAmount, Decimal TotalAmount, long CurrentUserId, out bool IsSuccess);
        void AssignProduct(List<AssProHelper> lsProduct, long CurrentUserId, Decimal AdvAmount, Decimal TotalAmount, long AssigneeUserId, out bool IsSuccess);
        void ConvertionComplete(long ProductConvertPID,List<AssProHelper> assProHelper,bool isDirectProduct);
        List<ProductList> MyCreatedAssignedProduct(long currentUserID);
        List<ProductList> MyAssignedProductList(long currentUserID);
        List<ProductList> MyCovertedProductList(long currentUserID);
    }
}
