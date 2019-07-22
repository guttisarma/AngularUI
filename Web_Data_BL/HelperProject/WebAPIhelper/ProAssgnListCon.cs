using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TradeBulk_Helper.WebAPIhelper
{
  public class ProAssgnListCon
  {
    public long UserPID { get; set; }
    public long ProductPID { get; set; }
    public string AssigneeUserFullName { get; set; }
    public string ProductName { get; set; }
    public string ProductCode { get; set; }
    public long AvailableQuantity { get; set; }
    public string AssignedUserFullName { get; set; }
  }
}
