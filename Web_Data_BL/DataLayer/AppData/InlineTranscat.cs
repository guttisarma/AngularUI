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
    
    public partial class InlineTranscat
    {
        public long InlineTranscatPID { get; set; }
        public Nullable<long> UserdetailPID { get; set; }
        public Nullable<long> ProductPID { get; set; }
        public Nullable<long> Amount { get; set; }
        public Nullable<long> TransactionStatePid { get; set; }
        public Nullable<long> Participant { get; set; }
    
        public virtual Product Product { get; set; }
        public virtual UserTransacState UserTransacState { get; set; }
        public virtual UserDetail UserDetail { get; set; }
    }
}
