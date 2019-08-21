using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TradeBulk_Helper.Interfaces;

namespace TradeBulk_Helper
{
    public class ExPhone: IExchangeUserInfo
    {
        public string strPhone { get; set; }
        public bool bIsActive { get; set; }
    }
}
