using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TradeBulk_Helper.Interfaces;

namespace TradeBulk_Helper
{
    public class ExAddress: IExchangeUserInfo
    {
        public string strAddress1 { get; set; }
        public string strAddress2 { get; set; }
        public string strAddress3 { get; set; }
        public string strCity { get; set; }
        public string strState { get; set; }
        public string strCountry { get; set; }
        public long AddressType { get; set; }
  }
}
