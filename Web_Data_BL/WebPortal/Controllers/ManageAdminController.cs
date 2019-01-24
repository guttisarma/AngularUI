using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TradeBulk_Web.Models.SupportModels;
using TradeBulk_Web.Authe_AuthoATION;
using TradeBulk_BusinessLayer;
using TradeBulk_Web.Models.Administrator;
using TradeBulk_Web.Models.ViewModels;
using TradeBulk_DataLayer.AppData;
using TradeBulk_Helper;

namespace TradeBulk_Web.Controllers
{
    public class ManageAdminController : Controller
    {

        SubjectModel OptionsList = new SubjectModel();
        AdminUsersList Aul = new AdminUsersList();
        public ManageAdminController()
        {
            OptionsList.SubjectList.Add(new SelectListItem { Text = "Current Users", Value = "1" });
            OptionsList.SubjectList.Add(new SelectListItem { Text = "New Users", Value = "2" });
        }

        // GET: ManageAdmin
        public ActionResult Index()
        {
            Aul.Aso = OptionsList;
            Aul.lsNURs = null;
            ViewBag.OptionsList = OptionsList;
            return View(Aul);
        }
        [HttpPost]
        public ActionResult Index(FormCollection form)
        {
            ManageAdminHelper MAdminhelper = new ManageAdminHelper();
            List<NewUserRegistrationSupport> ls = new List<NewUserRegistrationSupport>();
            if (form.Count==1 && Convert.ToInt32(form[0])==1)
            {
                ls = MAdminhelper.GetAllApprovedUsers();
                ViewBag.Title = "Approved Users";
            }
            else
            {
                
               ls = MAdminhelper.GetNewUser();
                ViewBag.Title = "New Users";
               
            }
            Aul.Aso = OptionsList;
            Aul.lsNURs = ls;
            return View(Aul);
        }
    }
}