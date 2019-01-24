using TradeBulk_Helper;
using TradeBulk_BusinessLayer;
using TradeBulk_Web.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TradeBulk_Web.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        //8989
        [HttpPost]
        public ActionResult NewProduct()
        {

            // Checking no of files injected in Request object  
            if (Request.Files.Count > 0)
            {
                try
                {
                    NewProductViewModel ProductDetails = new NewProductViewModel();
                    ProductDetails.Documents = new List<DocumentViewModel>();
                    //  Get all files from Request object  
                    HttpFileCollectionBase files = Request.Files;
                    for (int i = 0; i < files.Count; i++)
                    {
                        //string path = AppDomain.CurrentDomain.BaseDirectory + "Uploads/";  
                        //string filename = Path.GetFileName(Request.Files[i].FileName);  

                        HttpPostedFileBase file = files[i];
                        string documentPath;

                        // Checking for Internet Explorer  
                        if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                        {
                            string[] testfiles = file.FileName.Split(new char[] { '\\' });
                            documentPath = Guid.NewGuid().ToString() + "_" + testfiles[testfiles.Length - 1];
                        }
                        else
                        {

                            documentPath = Guid.NewGuid().ToString() + "_" + file.FileName;
                        }

                        // Get the complete folder path and store the file inside it.  
                        documentPath = Path.Combine(Server.MapPath("~/Images/Products/"), documentPath);
                        file.SaveAs(documentPath);

                        DocumentViewModel dcment = new DocumentViewModel();
                        dcment.DocumentPath = documentPath;
                        dcment.MIMEType = file.ContentType;

                        ProductDetails.Documents.Add(dcment);

                    }

                    ProductDetails.ProductName = Request.Form["ProductName"].ToString();
                    ProductDetails.Price = Request.Form["Price"].ToString();
                    ProductDetails.Description = Request.Form["Description"].ToString();
                    ProductDetails.Quantity = Request.Form["Quantity"].ToString();
                    ProductDetails.ProductType = Request.Form["ProductType"].ToString();

                    ProductManagement pMgmt = new ProductManagement();
                    var CurrentUserId = ((TradeBulk_Web.Authe_AuthoATION.CustomPrincipal)HttpContext.User).UserId;
                    bool IsSuccess = false;
                    pMgmt.CreateProduct(ProductDetails, CurrentUserId,out IsSuccess);
                    // Returns message that successfully uploaded  
                    return Json("File Uploaded Successfully!");
                }
                catch (Exception ex)
                {
                    return Json("Error occurred. Error details: " + ex.Message);
                }

                //string path = System.IO.Path.Combine(Server.MapPath("~/Images/Products"), pic);
                // file is uploaded
                //file.SaveAs(path);


                // save the image path path to the database or you can send image 
                // directly to database
                // in-case if you want to store byte[] ie. for DB


            }
            // after successfully uploading redirect the user
            return null;
        }
    }
}
