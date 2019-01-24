using TradeBulk_Helper;
using TradeBulk_Web.Models.Administrator;
using TradeBulk_Web.Models.SupportModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TradeBulk_Web.Models.ViewModels
{
    public class AdminUsersList
    {
      public SubjectModel Aso { get; set; }
        public List<NewUserRegistrationSupport> lsNURs { get; set; }
    }
}