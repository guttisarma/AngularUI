using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TradeBulk_Web.Models.ViewModels
{
    public class ListEditViewModel
    {
        public IEnumerable<object> Elements { get; set; }
        public PagingInfo PagingInfo { get; set; }
    }
}