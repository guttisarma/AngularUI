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
    public string Name { get; set; }
    public string Code { get; set; }
    public long RemQuantity { get; set; }
    public string AssignedUserName { get; set; }
    public long? ProductAssignmentPID { get; set; }
  }
}
