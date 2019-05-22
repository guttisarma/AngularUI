using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TradeBulk_Helper.WebAPIhelper
{
  public class AddrssUser
  {
    public int iAddressTypeid { get; set; }
    public string strAddress1 { get; set; }
    public string strAddress2 { get; set; }
    public string strAddress3 { get; set; }
    public long lPhoneid { get; set; }
    public string strPhone { get; set; }
    public long lEmailid { get; set; }
    public string strEmail { get; set; }
  }

}
