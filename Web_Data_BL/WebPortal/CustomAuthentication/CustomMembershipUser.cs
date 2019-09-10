using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using TradeBulk_Web.Authe_AuthoATION;
#pragma warning disable CS0246 // The type or namespace name 'TradeBulk_DataLayer' could not be found (are you missing a using directive or an assembly reference?)
using TradeBulk_DataLayer.AppData;
#pragma warning restore CS0246 // The type or namespace name 'TradeBulk_DataLayer' could not be found (are you missing a using directive or an assembly reference?)

namespace TradeBulk_Web.Migrations
{
    public class CustomMembershipUser : MembershipUser
    {
        #region User Properties  

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserCode { get; set; }
#pragma warning disable CS0246 // The type or namespace name 'Role' could not be found (are you missing a using directive or an assembly reference?)
        public ICollection<Role> Roles { get; set; }
#pragma warning restore CS0246 // The type or namespace name 'Role' could not be found (are you missing a using directive or an assembly reference?)

        #endregion

#pragma warning disable CS0246 // The type or namespace name 'User' could not be found (are you missing a using directive or an assembly reference?)
        public CustomMembershipUser(User user) : base("CustomMembership", user.Username, user.UserId, user.Email, string.Empty, string.Empty, true, false, DateTime.Now, DateTime.Now, DateTime.Now, DateTime.Now, DateTime.Now)
#pragma warning restore CS0246 // The type or namespace name 'User' could not be found (are you missing a using directive or an assembly reference?)
        {
            UserId = user.UserId;
            FirstName = user.FirstName;
            LastName = user.LastName;
            UserCode = user.UserCode;
            ICollection<UserRole> Ur = user.UserRoles;
            Roles = (from x in Ur select x.Role).ToList<Role>();
        }
    }
}
