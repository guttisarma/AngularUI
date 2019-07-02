using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace TradeBulk_Helper
{
  public class UserInfo
  {
    public long UserId { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string PhoneNo { get; set; }
    public string ManagerName { get; set; }
    public string ManagerEmail { get; set; }
    public string Code { get; set; }
    public string ManagerCode { get; set; }
    public List<UserInfo> GetFakeUserInfos()
    {
      List<UserInfo> userInfos = new List<UserInfo>();
      UserInfo uInfo = new UserInfo();
      uInfo.Name = "Mohan";
      uInfo.Email = "Mohan@gmail.com";
      uInfo.PhoneNo = "8956327415";
      uInfo.ManagerCode = "MOHAN";
      uInfo.Code = "MOHAN";
      userInfos.Add(uInfo);
      uInfo.Name = "Sahana";
      uInfo.Email = "Sahana@gmail.com";
      uInfo.PhoneNo = "8956897415";
      uInfo.ManagerCode = "MOHAN";
      uInfo.Code = "SAHANA";
      userInfos.Add(uInfo);
      return userInfos;
    }

  }
}
