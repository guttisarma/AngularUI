using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TradeBulk_Helper.WebAPIhelper
{
  public class RegUser
  {
    public long lRegUserid { get; set; }
    public string strFirstName { get; set; }
    public string strMiddleName { get; set; }
    public string strLastName { get; set; }
    public string strDob { get; set; }
    public string Phonenumber { get; set; }
    public string Email { get; set; }
    public string UserCode { get; set; }
    public string strAdharNumber { get; set; }
    public string strApprovalReason { get; set; }
    public bool bGender { get; set; }
    public List<AddrssUser> lsAddrssUser { get; set; }

  }

}
