using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TradeBulk_Helper.Interfaces;

namespace TradeBulk_Helper
{
    public class ExUser: IExchangeUserInfo
    {
        public string ID { get; set; }
        public string strFirstName { get; set; }
        public string strMiddleName { get; set; }
        public string strLastName { get; set; }
        public string dtDateOfBirth { get; set; }
        public string strUniqueNumber { get; set; }
    }
}
