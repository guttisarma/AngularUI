using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TradeBulk_Web.Models
{
    public class PagingInfo
    {
        public long TotalItems { get; set; }
        public int ItemsPerPage { get; set; }
        public int CurrentPage { get; set; }
        public int TotalPages
        {
            get { return (int)Math.Ceiling((decimal)TotalItems / ItemsPerPage); }
        }
    }
}