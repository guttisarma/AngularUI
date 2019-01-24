using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using TradeBulk_Web.Authe_AuthoATION;
using TradeBulk_DataLayer.AppData;

namespace TradeBulk_Web.Migrations
{
    public class CustomMembershipUser : MembershipUser
    {
        #region User Properties  

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserCode { get; set; }
        public ICollection<Role> Roles { get; set; }

        #endregion

        public CustomMembershipUser(User user) : base("CustomMembership", user.Username, user.UserId, user.Email, string.Empty, string.Empty, true, false, DateTime.Now, DateTime.Now, DateTime.Now, DateTime.Now, DateTime.Now)
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