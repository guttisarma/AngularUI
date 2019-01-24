using TradeBulk_BusinessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TradeBulk_Web.Models.ViewModels;
using TradeBulk_Web.Models;
using TradeBulk_Helper;

namespace TradeBulk_Web.Controllers
{
    public class ProductController : ListEditController
    {
        //8989
        ProductManagement pMgnt;
        public ProductController()
        {
            pMgnt = new ProductManagement();
        }
        // GET: Product
        public ActionResult Index(int currentPage=1)
        {

            var CurrentUserId = ((TradeBulk_Web.Authe_AuthoATION.CustomPrincipal)HttpContext.User).UserId;
            List<NewProductViewModel> lsproduct = pMgnt.GetCurrentUserProductList(CurrentUserId,PageSize,currentPage,out TotalPages);
            ListEditViewModel listofRecord = new ListEditViewModel();
            listofRecord.Elements = lsproduct;
            listofRecord.PagingInfo = new PagingInfo() { TotalItems = TotalPages, CurrentPage = currentPage, ItemsPerPage = PageSize };
            return View(listofRecord);
        }

        public ActionResult OnlineProducts(int currentPage = 1)
        {
            List<NewProductViewModel> lsproduct = pMgnt.GetOnlineProducts( PageSize, currentPage, out TotalPages);
            ListEditViewModel listofRecord = new ListEditViewModel();
            listofRecord.Elements = lsproduct;
            listofRecord.PagingInfo = new PagingInfo() { TotalItems = TotalPages, CurrentPage = currentPage, ItemsPerPage = PageSize };
            return View(listofRecord);

        }

        // GET: Product/Details/5
        public ActionResult Details(int id)
        {
            NewProductViewModel proDetails = pMgnt.GetProductbyId(id);
            return View(proDetails);
        }

        // GET: Product/Details/5
        public ActionResult ProductAuctionDetails(int id)
        {
            return View();
        }

        // GET: Product/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Product/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Product/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Product/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Product/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Product/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
