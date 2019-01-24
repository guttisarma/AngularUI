using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TradeBulk_Web.Models.SupportModels
{
    public class SubjectModel
    {
        public SubjectModel()
        {
            SubjectList = new List<SelectListItem>();
        }

        [DisplayName("Subjects")]
        public List<SelectListItem> SubjectList
        {
            get;
            set;
        }
    }
}