//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TradeBulk_DataLayer.AppData
{
    using System;
    using System.Collections.Generic;
    
    public partial class Phone
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Phone()
        {
            this.UserDetailPhones = new HashSet<UserDetailPhone>();
        }
    
        public long Phonepid { get; set; }
        public string Number { get; set; }
        public Nullable<long> PhoneTypePID { get; set; }
        public Nullable<bool> IsActive { get; set; }
    
        public virtual PhoneType PhoneType { get; set; }
        public virtual PhoneType PhoneType1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UserDetailPhone> UserDetailPhones { get; set; }
    }
}
