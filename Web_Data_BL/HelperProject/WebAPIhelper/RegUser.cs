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
    public string strCreatedOn { get; set; }
    public string PhoneNumber { get; set; }
    public string Email { get; set; }
    public string UserCode { get; set; }
    public string strAdharNumber { get; set; }
    public string strApprovalReason { get; set; }
    public string strRelativePicUrl { get; set; }
    public bool bGender { get; set; }
    public List<AddrssUser> lsAddrssUser { get; set; }
    private UserType _userTypePID;
    public int UserTypePID
    {
      get
      {
        return  Convert.ToInt32(_userTypePID);
      }
      set
      {
        _userTypePID =(UserType) value;
      }
    }
    public string token { get; set; }

  }
  public enum UserType
  {
    Admin=1,
    Manager=2,
    NormalUser=3
  }
  public enum UserView
  {
    PendingApproval = 1,
    Approaved = 2,
    ManagersOnly = 3,
    ActiveUsers = 4,
    InActiveUsers = 5,
    All = 6
  }
}
