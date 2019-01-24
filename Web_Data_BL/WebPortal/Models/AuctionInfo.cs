using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TradeBulk_BusinessLayer
{
   public class AuctionInfo
    {
        public long PID { get; set; }
        public string UserName {get; set;}
        public long AuctionAmount { get; set; }
        public string TimeStamp { get; set; }
    }
}
