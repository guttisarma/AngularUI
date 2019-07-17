using TradeBulk_DataLayer;
using TradeBulk_DataLayer.AppData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TradeBulk_Helper;
using TradeBulk_Helper.Interfaces;
using System.Linq.Expressions;
using InlineTranscatType = TradeBulk_Helper.InlineTranscatType;
using TradeBulk_Helper.WebAPIhelper;

namespace TradeBulk_BusinessLayer
{
  //8989
  public class ProductManagement : IProductManagement
  {
    #region Declarations
    GenericRepository<Product> ProductRepository;
    GenericRepository<ProductAssignment> ProductAssignmentRepository;
    GenericRepository<ProductConvert> ProductConvertRepository;
    GenericRepository<ProductType> ProductTypeRepository;
    GenericRepository<Document> DocumentRepository;
    GenericRepository<DocumentType> DocumentTypeRepository;
    GenericRepository<User> UserRepository;
    GenericRepository<UserDetail> UserDetailsRepository;
    GenericRepository<AssignmentProd> AssignmentProdRepository;
    GenericRepository<ProDetailAssignView> ProDetailAssignViewRepository;
    GenericRepository<AssignConvertRelation> AssignConvertRelationRepository;
    GenericRepository<SupportConverted> SupportConvertedRepository;
    // ITransactFactory transactFactory;
    #endregion

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
    public List<ProductList> MyCreatedAssignedProduct(long currentUserID)
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
          //Created Products
          foreach (var pro in lsPro)
          {
            ProductList proResult = new ProductList();
            proResult.ProductPID = pro.ProductPID;
            proResult.Code = pro.Code;
            proResult.Name = pro.ProductName;
            proResult.Quantity = pro.Quanity;
            proResult.RemQuantity = pro.RemQuantity == null ? 0 : Convert.ToInt64(pro.RemQuantity);
            proResult.Description = pro.Description;
            if (pro.CreatedOn != null)
              proResult.CreatedOn = ((DateTime)pro.CreatedOn).ToString("dd/MM/yyyy");
            proResult.IsAssign = false;
            lsProResult.Add(proResult);
          }
          AssignmentProdRepository = unitOfWork.GetRepoInstance<AssignmentProd>();
          //Assigned Products
          foreach (var pro in lsProAss)
          {

            IQueryable<AssignmentProd> assignmentProds = AssignmentProdRepository.GetAllExpressions(x => x.ProductAssignmentPID == pro.ProductAssignmentPID, null, null);
            foreach (var assignmentProd in assignmentProds)
            {
              ProductList proResult = new ProductList();
              proResult.ProductPID = assignmentProd.Product.ProductPID;
              proResult.Code = assignmentProd.Product.Code;
              proResult.Name = assignmentProd.Product.ProductName;
              proResult.Quantity = assignmentProd.Quantity == null ? 0 : (long)assignmentProd.Quantity;
              proResult.RemQuantity = assignmentProd.RemQuanity == null ? 0 : Convert.ToInt64(assignmentProd.RemQuanity);
              proResult.Description = assignmentProd.Product.Description;
              if (pro.CreatedOn != null)
                proResult.CreatedOn = ((DateTime)pro.CreatedOn).ToString("dd/MM/yyyy");
              proResult.IsAssign = true;
              proResult.AssignedUser = assignmentProd.ProductAssignment.UserDetail.FirstName;
              lsProResult.Add(proResult);
            }

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


    public ProductDetails GetProductbyCode(string proCode, long currentUserID)
    {
      ProductDetails pd = new ProductDetails();
      pd.PDAssignment = new List<ProductDetailAssignment>();
      using (UnitOfWork unitOfWork = new UnitOfWork())
      {
        ProductRepository = unitOfWork.GetRepoInstance<Product>();
        Product product = ProductRepository.GetAllExpressions(x=>x.Code==proCode,null,null).FirstOrDefault<Product>();
        pd.iCreProdid = product.ProductPID;
        pd.lQuantity = product.Quanity;
        pd.Price = product.Price == null ? 0 : (decimal)product.Price;
        pd.strDescription = product.Description;
        pd.strProdName = product.ProductName;
        pd.strProdCode = product.Code;
        ProDetailAssignViewRepository = unitOfWork.GetRepoInstance<ProDetailAssignView>();
        IQueryable<ProDetailAssignView> AProd = ProDetailAssignViewRepository.GetAllExpressions(x => x.ProductPID == pd.iCreProdid, null, null);
        foreach (var AssignProd in AProd)
        {
          ProductDetailAssignment PDAssignment = new ProductDetailAssignment();
          PDAssignment.Quantity += AssignProd.Quantity == null ? 0 : (long)AssignProd.Quantity;
          PDAssignment.AssignProductCode = AssignProd.Code;
          PDAssignment.CreatedOn = (DateTime)AssignProd.CreatedOn;
          PDAssignment.UserName = AssignProd.AssignedUser;
          pd.PDAssignment.Add(PDAssignment);
        }


      }
      return pd;
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
          AssignmentProdRepository = unitOfWork.GetRepoInstance<AssignmentProd>();
          IQueryable<AssignmentProd> lsAssPro = AssignmentProdRepository.Get(x => x.Product.OwnerPID == currentUserID, null);
          List<ProductList> lsProResult = new List<ProductList>();
          foreach (var pro in lsAssPro)
          {
            ProductList proResult = new ProductList();
            proResult.ParentCode = pro.ProductAssignment.ProductCode;
            proResult.Code = pro.Product.Code;
            //proResult.Name = pro.Product.ProductName;
            proResult.Quantity = pro.Product.Quanity;
            //proResult.Description = pro.Product.Description;//
            if (pro.ProductAssignment.CreatedOn != null)
              proResult.CreatedOn = ((DateTime)pro.ProductAssignment.CreatedOn).ToString("dd/MM/yyyy");
            //to whom its assigned
            proResult.AssignedUser = pro.Product.UserDetail.FirstName + " " + pro.Product.UserDetail.LastName;//need to check which user
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
        return "Pro_Cre" + getNextPID(action) + DateTime.Now.ToString("HH:mm:ss").Replace(":", "");
      }
      else if (action == "Assign")
      {
        return "Pro_Ass" + getNextPID(action) + DateTime.Now.ToString("HH:mm:ss").Replace(":", "");
      }
      else if (action == "Convert")
      {
        return "Pro_Con" + getNextPID(action) + DateTime.Now.ToString("HH:mm:ss").Replace(":", "");
      }
      else
        return "Pro" + DateTime.Now.ToString("HH:mm:ss").Replace(":", "");
    }

    /// <summary>
    /// to create new product
    /// </summary>
    /// <param name="product"></param>
    /// <param name="CurrentUserID"></param>
    public void CreateProduct(CreProd product, long CurrentUserID, out bool isSuccess)
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

          prdct.ProductName = product.strProdName;
          prdct.Code = GenProductCode("Create");//need to generate
          prdct.Description = product.strDescription;
          prdct.Price = Convert.ToDecimal(product.Price);
          prdct.CreatedOn = DateTime.Now;
          //owner
          prdct.OwnerPID = CurrentUserID;//UserRepository.GetByID(CurrentUserID);
          prdct.CreatedUserPID = CurrentUserID;
          //803 taking input from User not hard corded one
          prdct.ProductType = ProductTypeRepository.GetByID(product.lProducttypeid);
          prdct.Quanity = Convert.ToInt32(product.lQuantity);
          prdct.RemQuantity = Convert.ToInt32(product.lQuantity);
          ProductRepository.Insert(prdct);
          //if (product.Documents != null)
          //  foreach (DocumentViewModel Dviewmodel in product.Documents)
          //  {
          //    Document dcment = new Document();
          //    dcment.ServerPath = Dviewmodel.DocumentPath;
          //    dcment.FileExtension = Dviewmodel.MIMEType;
          //    dcment.DocumentType = DocumentTypeRepository.GetByID((long)EDocumentType.ProfilePhoto);
          //    dcment.Products.Add(prdct);
          //    DocumentRepository.Insert(dcment);
          //  }
          unitOfWork.SaveChanges();
          //if (product.Price != null)
          //{
          //  transactFactory.CreateTransac(CurrentUserID, null, prdct.ProductPID,(Decimal) prdct.Price,(long)InlineTranscatType.Created);
          //}
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
          Product oProduct = ProductRepository.GetByID(Convert.ToInt64(product.Id));
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
          //if (product.Price != null)
          //  transactFactory.CreateTransac(CurrentUserID, null, oProduct.ProductPID, 800, (long)InlineTranscatType.Created);
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
    public void ConvertProduct(List<ConvertAssProHelper> lsconvertAssProHelpers, string prodName, Decimal AdvAmount, Decimal TotalAmount, long CurrentUserId, out bool isSuccess)
    {
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          ProductAssignmentRepository = unitOfWork.GetRepoInstance<ProductAssignment>();
          ProductConvertRepository = unitOfWork.GetRepoInstance<ProductConvert>();
          ProductConvert proConvert = new ProductConvert();
          proConvert.ProductCode = GenProductCode("Convert");//Code
          proConvert.ConvertedUserPID = CurrentUserId;
          proConvert.AdvanceAmount = AdvAmount;
          proConvert.TotalAmount = TotalAmount;
          ProductConvertRepository.Insert(proConvert);
          List<AssProHelper> assProHelpers = new List<AssProHelper>();
          foreach (var assProHelper in lsconvertAssProHelpers)
          {
            Expression<Func<ProductAssignment, object>> parameter1 = v => v.UserDetail;
            Expression<Func<ProductAssignment, object>>[] parameterArray = new Expression<Func<ProductAssignment, object>>[] { parameter1/*, parameter2 ,parameter3, parameter4 */};
            IQueryable<ProductAssignment> lspro = ProductAssignmentRepository.GetAllExpressions(x => x.ProductAssignmentPID == assProHelper.AssignProductId, null, parameterArray);
            ProductConvertRepository = unitOfWork.GetRepoInstance<ProductConvert>();

            AssignConvertRelationRepository = unitOfWork.GetRepoInstance<AssignConvertRelation>();
            foreach (var pro in lspro)
            {
              AssignConvertRelation assConRelation = new AssignConvertRelation();
              assConRelation.ProductAssignmentPID = pro.ProductAssignmentPID;
              assConRelation.ProductConvertPID = proConvert.ProductConvertPID;
              AssignConvertRelationRepository.Insert(assConRelation);
            }
            foreach (var proID in assProHelper.lsAssProHelpers)
            {
              assProHelpers.Add(new AssProHelper() { ProductId = proID.ProductId, Qunty = proID.Qunty });
            }
          }
          unitOfWork.SaveChanges();
          ConvertionComplete(proConvert.ProductConvertPID, assProHelpers, false);
          isSuccess = true;
          //transactFactory.CreateTransac(CurrentUserId, null, null, 0, (long)InlineTranscatType.Convert);
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
    public void AssignProduct(List<AssProHelper> lsProduct, long CurrentUserId, Decimal AdvAmount, Decimal TotalAmount, long AssigneeUserId, out bool isSuccess)
    {
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          ProductRepository = unitOfWork.GetRepoInstance<Product>();
          AssignmentProdRepository = unitOfWork.GetRepoInstance<AssignmentProd>();
          //IQueryable<Product> lspro = ProductRepository.GetAllExpressions(x => lsProduct.Select(y => y.ProductId).ToList<long>().Contains(x.ProductPID), null, null);
          bool isvalidOperation = CheckValidOperation(lsProduct);
          if (isvalidOperation)
          {
            ProductAssignmentRepository = unitOfWork.GetRepoInstance<ProductAssignment>();
            ProductAssignment proAssignment = new ProductAssignment();
            proAssignment.AssignedUserPid = AssigneeUserId;
            proAssignment.CreatedOn = DateTime.Now;
            proAssignment.UpdatedOn = DateTime.Now;
            proAssignment.CreatedUserPID = CurrentUserId;
            proAssignment.AdvanceAmount = AdvAmount;
            proAssignment.TotalAmount = TotalAmount;
            proAssignment.ProductCode = GenProductCode("Assign");//newly generated code
            ProductAssignmentRepository.Insert(proAssignment);

            foreach (var pro in lsProduct)
            {
              long Quntity = pro.Qunty;
              AssignmentProd assignProduct = new AssignmentProd();
              Product prdct = ProductRepository.GetByID(pro.ProductId);
              assignProduct.Product = prdct;
              assignProduct.Quantity = Quntity;
              assignProduct.RemQuanity = Quntity;
              assignProduct.ProductAssignmentPID = proAssignment.ProductAssignmentPID;
              AssignmentProdRepository.Insert(assignProduct);
              prdct.UpdatedOn = DateTime.Now;
              prdct.UpdatedUserPID = CurrentUserId;
              prdct.RemQuantity = (prdct.RemQuantity == 0) ? prdct.Quanity - Quntity : prdct.RemQuantity - Quntity;
              ProductRepository.Update(prdct);
            }
            unitOfWork.SaveChanges();
            //transactFactory.CreateTransac(CurrentUserId, AssigneeUserId,null,0, (long)InlineTranscatType.Assign);
            isSuccess = true;
          }
          else
          {
            //send Invalid Operation to User
            LogHelper.WriteErrorLog("Invalid Operation From User");
            isSuccess = false;
          }
        }
      }
      catch (Exception ex)
      {
        LogHelper.WriteErrorLog(ex);
        isSuccess = false;
      }
    }

    private bool CheckValidOperation(List<AssProHelper> lsProduct)
    {
      bool isvalidOperation = true;
      foreach (var pro in lsProduct)
      {
        Product prdct = ProductRepository.GetByID(pro.ProductId);
        if (prdct.RemQuantity < pro.Qunty)
        {
          isvalidOperation = false;
          break;
        }
      }

      return isvalidOperation;
    }

    public void ConvertionComplete(long ProductConvertPID, List<AssProHelper> assProHelpers, bool directProduct)
    {
      try
      {


        if (!directProduct)
        {
          using (UnitOfWork unitOfWork = new UnitOfWork())
          {
            AssignConvertRelationRepository = unitOfWork.GetRepoInstance<AssignConvertRelation>();
            AssignmentProdRepository = unitOfWork.GetRepoInstance<AssignmentProd>();
            IQueryable<AssignConvertRelation> lsassignConvertRelations = AssignConvertRelationRepository.GetAllExpressions(x => x.ProductConvertPID == ProductConvertPID, null, null);
            List<long> AssigmentPIDFromRelation = new List<long>();
            foreach (var assignConvert in lsassignConvertRelations)
            {
              if (assignConvert.ProductAssignmentPID != null)
                AssigmentPIDFromRelation.Add((long)assignConvert.ProductAssignmentPID);
            }
            foreach (var assignConvertPID in AssigmentPIDFromRelation)
            {
              Expression<Func<AssignmentProd, object>> parameter1 = v => v.Product;
              Expression<Func<AssignmentProd, object>>[] parameterArray = new Expression<Func<AssignmentProd, object>>[] { parameter1/*, parameter2 ,parameter3, parameter4 */};

              IQueryable<AssignmentProd> lsassignmentProds = AssignmentProdRepository.GetAllExpressions(x => x.ProductAssignmentPID == assignConvertPID, null, parameterArray);
              SupportConvertedRepository = unitOfWork.GetRepoInstance<SupportConverted>();
              foreach (var assignmentProd in lsassignmentProds)
              {
                AssProHelper assProHelper = assProHelpers.Where(x => x.ProductId == assignmentProd.ProductPID).FirstOrDefault<AssProHelper>();
                if (assProHelper.Qunty > 0 && assignmentProd.Quantity >= assProHelper.Qunty)
                {
                  SupportConverted supportConverted = new SupportConverted();
                  supportConverted.Product = assignmentProd.Product;
                  supportConverted.ProductConvertPID = ProductConvertPID;
                  supportConverted.QuanityUsed = assProHelper.Qunty;
                  SupportConvertedRepository.Insert(supportConverted);
                  assignmentProd.RemQuanity = assignmentProd.Quantity - assProHelper.Qunty;
                  AssignmentProdRepository.Update(assignmentProd);
                }
              }
            }
            unitOfWork.SaveChanges();
          }
        }
        else
        {
          using (UnitOfWork unitOfWork = new UnitOfWork())
          {
            ProductRepository = unitOfWork.GetRepoInstance<Product>();
            bool isvalidOperation = CheckValidOperation(assProHelpers);
            if (isvalidOperation)
            {
              foreach (var Prdct in assProHelpers)
              {
                Product product = ProductRepository.GetByID(Prdct.ProductId);
                product.RemQuantity = product.Quanity - Prdct.Qunty;
                SupportConverted supportConverted = new SupportConverted();
                supportConverted.Product = product;
                supportConverted.ProductConvertPID = ProductConvertPID;
                supportConverted.QuanityUsed = Prdct.Qunty;
                SupportConvertedRepository.Insert(supportConverted);
                ProductRepository.Update(product);
              }
            }
            unitOfWork.SaveChanges();
          }

        }
      }
      catch (Exception ex)
      {
        LogHelper.WriteErrorLog(ex);
        //isSuccess = false;
      }
    }


    #endregion
  }
}
