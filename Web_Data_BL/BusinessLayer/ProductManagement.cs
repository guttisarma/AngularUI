using TradeBulk_DataLayer;
using TradeBulk_DataLayer.AppData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TradeBulk_Helper;
using TradeBulk_Helper.Interfaces;

namespace TradeBulk_BusinessLayer
{
  //8989
  public class ProductManagement : IProductManagement
  {

    GenericRepository<Product> ProductRepository;
    GenericRepository<ProductAssignment> ProductAssignmentRepository;
    GenericRepository<ProductConvert> ProductConvertRepository;
    GenericRepository<ProductType> ProductTypeRepository;
    GenericRepository<Document> DocumentRepository;
    GenericRepository<DocumentType> DocumentTypeRepository;
    GenericRepository<User> UserRepository;
    GenericRepository<UserDetail> UserDetailsRepository;
    GenericRepository<AssignConvertRelation> AssignConvertRelationRepository;
    ITransactFactory transactFactory;
    #region constrator
    public ProductManagement()
    {


    }
    //public ProductManagement(ITransactFactory _transactFactory)
    //{
    //  transactFactory = _transactFactory;
    //}
    #endregion

    #region List

    /// <summary>
    /// Create and Assigned Products will list here
    /// </summary>
    /// <param name="currentUserID"></param>
    /// <returns></returns>
    public List<ProductList> MyProductList(long currentUserID)
    {
      using (UnitOfWork unitOfWork = new UnitOfWork())
      {
        try
        {
          ProductRepository = unitOfWork.GetRepoInstance<Product>();
          ProductAssignmentRepository = unitOfWork.GetRepoInstance<ProductAssignment>();
          IQueryable<Product> lsPro = ProductRepository.Get(x => x.CreatedUserPID == currentUserID, null);
          IQueryable<ProductAssignment> lsProAss = ProductAssignmentRepository.Get(x => x.AssignedUserPid == currentUserID, null);
          List<ProductList> lsProResult = new List<ProductList>();
          foreach (var pro in lsPro)
          {
            ProductList proResult = new ProductList();
            proResult.Code = pro.Code;
            proResult.Name = pro.ProductName;
            proResult.Quantity = pro.Quanity;
            proResult.RemQuantity = 0;//Here we have get Remaining 
            proResult.Description = pro.Description;
            if (pro.CreatedOn != null)
              proResult.CreatedOn = ((DateTime)pro.CreatedOn).ToString("dd/MM/yyyy");
            proResult.IsAssign = false;
            lsProResult.Add(proResult);
          }
          foreach (var pro in lsProAss)
          {
            ProductList proResult = new ProductList();
            proResult.Code = pro.Product.Code;
            proResult.Name = pro.Product.ProductName;
            proResult.Quantity = pro.Product.Quanity;
            proResult.Description = pro.Product.Description;
            if (pro.CreatedOn != null)
              proResult.CreatedOn = ((DateTime)pro.CreatedOn).ToString("dd/MM/yyyy");
            proResult.IsAssign = false;
            lsProResult.Add(proResult);
          }
          return lsProResult;
        }
        catch (Exception ex)
        {
          //Handle Exception
          return null;
        }

      }
      //return null;
    }

    /// <summary>
    /// Products which are Assined to other by the users
    /// </summary>
    /// <param name="currentUserID"></param>
    /// <returns></returns>
    public List<ProductList> MyAssignedProductList(long currentUserID)
    {
      using (UnitOfWork unitOfWork = new UnitOfWork())
      {
        try
        {
          ProductRepository = unitOfWork.GetRepoInstance<Product>();
          ProductAssignmentRepository = unitOfWork.GetRepoInstance<ProductAssignment>();
          IQueryable<ProductAssignment> lsProAss = ProductAssignmentRepository.Get(x => x.Product.OwnerPID == currentUserID, null);
          List<ProductList> lsProResult = new List<ProductList>();
          foreach (var pro in lsProAss)
          {
            ProductList proResult = new ProductList();
            proResult.ParentCode = pro.Product.Code;
            proResult.Code = pro.ProductCode;
            //proResult.Name = pro.Product.ProductName;
            proResult.Quantity = pro.Product.Quanity;
            //proResult.Description = pro.Product.Description;//
            if (pro.CreatedOn != null)
              proResult.CreatedOn = ((DateTime)pro.CreatedOn).ToString("dd/MM/yyyy");
            //to whom its assigned
            proResult.AssignedUser = pro.UserDetail.FirstName + " " + pro.UserDetail.LastName;//need to check which user
            lsProResult.Add(proResult);
          }
          return lsProResult;
        }
        catch (Exception ex)
        {
          //Handle Exception
          return null;
        }

      }
      return null;
    }

    /// <summary>
    /// Products which are Conveted by User (by the user/Owner
    /// </summary>
    /// <param name="currentUserID"></param>
    /// <returns></returns>
    public List<ProductList> MyCovertedProductList(long currentUserID)
    {
      using (UnitOfWork unitOfWork = new UnitOfWork())
      {
        try
        {
          ProductRepository = unitOfWork.GetRepoInstance<Product>();
          UserDetailsRepository = unitOfWork.GetRepoInstance<UserDetail>();
          ProductConvertRepository = unitOfWork.GetRepoInstance<ProductConvert>();
          IQueryable<ProductConvert> lsProAss = ProductConvertRepository.Get(x => x.ConvertedUserPID == currentUserID || x.OriginalOwnerPID == currentUserID, null, null);
          List<ProductList> lsProResult = new List<ProductList>();
          foreach (var pro in lsProAss)
          {
            ProductList proResult = new ProductList();
            proResult.Code = pro.ProductCode;
            //proResult.Name = pro.Product.ProductName;
            proResult.ConvertedUser = UserDetailsRepository.GetByID(pro.ConvertedUserPID).FirstName + " " + UserDetailsRepository.GetByID(pro.ConvertedUserPID).LastName;
            //proResult.Description = pro.Product.Description;//
            //to whom its assigned
            proResult.OwerUser = UserDetailsRepository.GetByID(pro.OriginalOwnerPID).FirstName + " " + UserDetailsRepository.GetByID(pro.OriginalOwnerPID).LastName;
            lsProResult.Add(proResult);
          }
          return lsProResult;
        }
        catch (Exception ex)
        {
          //Handle Exception
          return null;
        }

      }
      return null;
    }

    public List<NewProductViewModel> GetCurrentUserProductList(int CurrentUserID, int CurrentPage, int PageSize, out long TotalPages)
    {
      TotalPages = 0;
      List<NewProductViewModel> productResult = new List<NewProductViewModel>();
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          DocumentRepository = unitOfWork.GetRepoInstance<Document>();
          ProductRepository = unitOfWork.GetRepoInstance<Product>();
          UserDetailsRepository = unitOfWork.GetRepoInstance<UserDetail>();
          IQueryable<Product> lsProd = ProductRepository.GetAllExpressions(/*x => x.User.UserId == CurrentUserID*/);
          TotalPages = lsProd.Count<Product>();
          foreach (Product p in lsProd)
          {
            NewProductViewModel productVeiwModel = new NewProductViewModel();
            productVeiwModel.Id = p.ProductPID.ToString();
            productVeiwModel.Description = p.Description;
            productVeiwModel.AuctionDate = p.AuctionDate == null ? "" : p.AuctionDate.Value.ToString("dddd, dd MMMM yyyy HH:mm:ss");
            //productVeiwModel.Documents.Add(p.Document);
            byte[] byteData = System.IO.File.ReadAllBytes(p.Document.ServerPath);
            //Convert byte arry to base64string   
            string imreBase64Data = Convert.ToBase64String(byteData);
            productVeiwModel.ImageData = new StringBuilder("data:image/png;base64," + imreBase64Data);
            productVeiwModel.Price = p.Price.ToString();
            productVeiwModel.ProductName = p.ProductName;
            productVeiwModel.Quantity = p.Quanity.ToString();
            productResult.Add(productVeiwModel);
          }
        }
      }
      catch (Exception ex)
      {
        LogHelper.WriteErrorLog(ex);
      }
      return productResult;
    }

    public NewProductViewModel GetProductbyId(int id)
    {
      GenericRepository<Product> ProductRepository;
      GenericRepository<Document> DocumentRepository;
      NewProductViewModel productVeiwModel = new NewProductViewModel();
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          DocumentRepository = unitOfWork.GetRepoInstance<Document>();
          ProductRepository = unitOfWork.GetRepoInstance<Product>();
          Product lsProd = ProductRepository.GetByID(id);
          productVeiwModel.Id = lsProd.ProductPID.ToString();
          productVeiwModel.Description = lsProd.Description;
          //productVeiwModel.Documents.Add(p.Document);
          productVeiwModel.AuctionDate = lsProd.AuctionDate == null ? "" : lsProd.AuctionDate.Value.ToString("dddd dd MMMM yyyy HH:mm:ss");
          byte[] byteData = System.IO.File.ReadAllBytes(lsProd.Document.ServerPath);
          //Convert byte arry to base64string   
          string imreBase64Data = Convert.ToBase64String(byteData);
          productVeiwModel.ImageData = new StringBuilder("data:image/png;base64," + imreBase64Data);
          productVeiwModel.Price = lsProd.Price.ToString();
          productVeiwModel.ProductName = lsProd.ProductName;
          productVeiwModel.Quantity = lsProd.Quanity.ToString();
        }
      }
      catch (Exception ex)
      {
        LogHelper.WriteErrorLog(ex);
      }
      return productVeiwModel;

    }

    public List<NewProductViewModel> GetOnlineProducts(int CurrentPage, int PageSize, out long TotalPages)
    {
      TotalPages = 0;
      GenericRepository<Product> ProductRepository;
      List<NewProductViewModel> productResult;
      productResult = new List<NewProductViewModel>();
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          ProductRepository = unitOfWork.GetRepoInstance<Product>();
          IQueryable<Product> lsProd = ProductRepository.GetAllExpressions(x => x.IsPublic == true);
          TotalPages = lsProd.Count<Product>();

          foreach (Product p in lsProd)
          {
            NewProductViewModel productVeiwModel = new NewProductViewModel();
            productVeiwModel.Id = p.ProductPID.ToString();
            productVeiwModel.Description = p.Description;
            productVeiwModel.AuctionDate = p.AuctionDate == null ? "" : p.AuctionDate.Value.ToString("dddd, dd MMMM yyyy HH:mm:ss");
            //productVeiwModel.Documents.Add(p.Document);
            byte[] byteData = System.IO.File.ReadAllBytes(p.Document.ServerPath);
            //Convert byte arry to base64string   
            string imreBase64Data = Convert.ToBase64String(byteData);
            productVeiwModel.ImageData = new StringBuilder("data:image/png;base64," + imreBase64Data);
            productVeiwModel.Price = p.Price.ToString();
            productVeiwModel.ProductName = p.ProductName;
            productVeiwModel.ProductCode = p.Code;
            productVeiwModel.Quantity = p.Quanity.ToString();
            productResult.Add(productVeiwModel);

          }
        }
      }
      catch (Exception ex)
      {
        LogHelper.WriteErrorLog(ex);
      }
      return productResult;

    }


    public long getNextPID(string action)
    {
      return 0;
    }
    #endregion

    #region Actions
    public string GenProductCode(string action)
    {
      if (action == "Create")
      {
        return "Pro_Cre_" + getNextPID(action) + "_" + DateTime.Now.ToString("HH:mm:ss").Replace(":", "");
      }
      else if (action == "Assign")
      {
        return "Pro_Ass_" + getNextPID(action) + "_" + DateTime.Now.ToString("HH:mm:ss").Replace(":", "");
      }
      else if (action == "Convert")
      {
        return "Pro_Con_" + getNextPID(action) + "_" + DateTime.Now.ToString("HH:mm:ss").Replace(":", "");
      }
      else
        return "Pro_" + DateTime.Now.ToString("HH:mm:ss").Replace(":", "");
    }

    /// <summary>
    /// to create new product
    /// </summary>
    /// <param name="product"></param>
    /// <param name="CurrentUserID"></param>
    public void CreateProduct(NewProductViewModel product, long CurrentUserID, out bool isSuccess)
    {
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          DocumentRepository = unitOfWork.GetRepoInstance<Document>();
          ProductRepository = unitOfWork.GetRepoInstance<Product>();
          ProductTypeRepository = unitOfWork.GetRepoInstance<ProductType>();
          DocumentTypeRepository = unitOfWork.GetRepoInstance<DocumentType>();
          UserRepository = unitOfWork.GetRepoInstance<User>();
          Product prdct = new Product();

          prdct.ProductName = product.ProductName;
          prdct.Code = GenProductCode("Create");//need to generate
          prdct.Description = product.Description;
          prdct.Price = Convert.ToDecimal(product.Price);
          prdct.CreatedOn = DateTime.Now;
          //owner
          //prdct.Owner = UserRepository.GetByID(CurrentUserID);
          //803 taking input from User not hard corded one
          prdct.ProductType = ProductTypeRepository.GetByID((long)EProductType.Inventatory);
          prdct.Quanity = Convert.ToInt32(product.Quantity);
          ProductRepository.Insert(prdct);
          if (product.Documents != null)
            foreach (DocumentViewModel Dviewmodel in product.Documents)
            {
              Document dcment = new Document();
              dcment.ServerPath = Dviewmodel.DocumentPath;
              dcment.FileExtension = Dviewmodel.MIMEType;
              dcment.DocumentType = DocumentTypeRepository.GetByID((long)EDocumentType.ProfilePhoto);
              dcment.Products.Add(prdct);
              DocumentRepository.Insert(dcment);
            }
          unitOfWork.SaveChanges();
          if (product.Price != null)
          {
            transactFactory.CreateTransac(CurrentUserID, null, prdct.ProductPID,(Decimal) prdct.Price);
          }
          isSuccess = true;

        }
        //once Product is created we need to create Transact Record

      }
      catch (Exception ex)
      {
        LogHelper.WriteErrorLog(ex);
        isSuccess = false;
      }
    }

    public void UpdateProduct(NewProductViewModel product, long CurrentUserID, out bool isSuccess)
    {
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          DocumentRepository = unitOfWork.GetRepoInstance<Document>();
          ProductRepository = unitOfWork.GetRepoInstance<Product>();
          ProductTypeRepository = unitOfWork.GetRepoInstance<ProductType>();
          DocumentTypeRepository = unitOfWork.GetRepoInstance<DocumentType>();
          UserRepository = unitOfWork.GetRepoInstance<User>();
          Product oProduct = ProductRepository.GetByID(product.Id);
          oProduct.UpdatedOn = DateTime.Now;
          oProduct.UpdatedUserPID = CurrentUserID;
          oProduct.Price = Convert.ToDecimal(product.Price);
          if (product.Documents != null)
            foreach (DocumentViewModel Dviewmodel in product.Documents)
            {
              Document dcment = new Document();
              dcment.ServerPath = Dviewmodel.DocumentPath;
              dcment.FileExtension = Dviewmodel.MIMEType;
              dcment.DocumentType = DocumentTypeRepository.GetByID((long)EDocumentType.ProfilePhoto);
              dcment.Products.Add(oProduct);
              DocumentRepository.Insert(dcment);
            }
          unitOfWork.SaveChanges();
          if (product.Price != null)
            transactFactory.CreateTransac(CurrentUserID, null, oProduct.ProductPID, 800);
          isSuccess = true;
        }

      }

      catch (Exception ex)
      {
        LogHelper.WriteErrorLog(ex);
        isSuccess = false;
      }
    }
    /// <summary>
    /// To convert List products into single product
    /// </summary>
    /// <param name="lsProduct"></param>
    /// <param name="prodName"></param>
    /// <param name="CurrentUserId"></param>
    public void ConvertProduct(Dictionary<long, int> lsProduct, string prodName, long CurrentUserId, out bool isSuccess)
    {
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          ProductAssignmentRepository = unitOfWork.GetRepoInstance<ProductAssignment>();
          IQueryable<ProductAssignment> lspro = ProductAssignmentRepository.GetAllExpressions(x => lsProduct.Keys.Contains(x.ProductAssignmentPID), null, null);
          ProductConvertRepository = unitOfWork.GetRepoInstance<ProductConvert>();
          ProductConvert proConvert = new ProductConvert();
          proConvert.ProductCode = GenProductCode("Convert");//Code
          proConvert.ConvertedUserPID = CurrentUserId;
          UserDetail userDetail = lspro.FirstOrDefault<ProductAssignment>().Product.UserDetail;
          proConvert.OriginalOwnerPID = userDetail.UserdetailPID;
          ProductConvertRepository.Insert(proConvert);
          AssignConvertRelationRepository = unitOfWork.GetRepoInstance<AssignConvertRelation>();
          foreach (var pro in lspro)
          {
            AssignConvertRelation assConRelation = new AssignConvertRelation();
            assConRelation.ProductAssignmentPID = pro.ProductAssignmentPID;
            assConRelation.ProductConvertPID = proConvert.ProductConvertPID;
            AssignConvertRelationRepository.Insert(assConRelation);
          }
          unitOfWork.SaveChanges();
          isSuccess = true;
        }

      }
      catch (Exception ex)
      {
        LogHelper.WriteErrorLog(ex);
        isSuccess = false;
      }


    }

    /// <summary>
    /// To assign List of products into single User
    /// </summary>
    /// <param name="lsProduct"></param>
    /// <param name="CurrentUserId"></param>
    /// <param name="AssigneeUserId"></param>
    public void AssignProduct(Dictionary<long, int> lsProduct, long CurrentUserId, long AssigneeUserId, out bool isSuccess)
    {

      try
      {


        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          ProductRepository = unitOfWork.GetRepoInstance<Product>();
          IQueryable<Product> lspro = ProductRepository.GetAllExpressions(x => lsProduct.Keys.Contains(x.ProductPID), null, null);
          ProductAssignmentRepository = unitOfWork.GetRepoInstance<ProductAssignment>();
          foreach (var pro in lspro)
          {
            ProductAssignment proAssignment = new ProductAssignment();
            proAssignment.Product = pro;
            proAssignment.quantity = lsProduct[pro.ProductPID];
            proAssignment.AssignedUserPid = AssigneeUserId;
            proAssignment.CreatedOn = DateTime.Now;
            proAssignment.CreatedUserPID = CurrentUserId;
            proAssignment.ProductCode = GenProductCode("Assign");//newly generated code
            ProductAssignmentRepository.Insert(proAssignment);
            Product prdct = ProductRepository.GetByID(pro.ProductPID);
            prdct.RemQuantity = (prdct.RemQuantity == 0) ? prdct.Quanity - lsProduct[pro.ProductPID] : prdct.RemQuantity - lsProduct[pro.ProductPID];
            ProductRepository.Update(prdct);
          }
          unitOfWork.SaveChanges();
          isSuccess = true;
        }
      }
      catch (Exception ex)
      {
        LogHelper.WriteErrorLog(ex);
        isSuccess = false;
      }
    }

    #endregion
  }
}
