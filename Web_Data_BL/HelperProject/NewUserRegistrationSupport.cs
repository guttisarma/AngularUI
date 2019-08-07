using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TradeBulk_Helper
{
    public class NewUserRegistrationSupport
    {
        public string ID { get; set; }
        [DisplayName("First Name")]
        public string strFirstName { get; set; }
        [DisplayName("Middle Name")]
        public string strMiddleName { get; set; }
        [DisplayName("Last Name")]
        public string strLastName { get; set; }
        [DisplayName("Phone Number")]
        public string PhoneNumber { get; set; }
        [DisplayName("Email")]
        public string Email { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string Address3 { get; set; }
        [DisplayName("Full Address")]
        public string FullAddress
        {
            get
            {
                return Address1 + " " + Address2 + " " + Address3 + " .";
            }
        }
        public string AddressProofType { get; set; }
        public string AddressID { get; set; }
        public string strDob { get; set; }
        [DisplayName("Date of Birth")]
        public String DateofBirth
        {
            get
            {
                if (strDob == null)
                {
                    return "";
                }
                return (Convert.ToDateTime( strDob).ToString("dd/MM/yyyy"));
            }
        }


    }
}
