using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TradeBulk_Helper
{
  public  class InLineTransaction
    {
        public long InlineTranscatPID { get; set; }
        public Nullable<long> UserdetailPID { get; set; }
        public String UserName { get; set; }
        public Nullable<long> ProductPID { get; set; }
        public String ProductCode { get; set; }
        public String ProductName { get; set; }
        public Nullable<decimal> Amount { get; set; }
        public Nullable<long> TransactionStatePid { get; set; }
    }
}
