using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TradeBulk_Helper.Interfaces;

namespace TradeBulk_Helper
{
    public class ExEmail: IExchangeUserInfo
    {
        public string strEmail { get; set; }
        public bool bIsActive { get; set; }
    }
}
