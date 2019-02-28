﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class TradeBulkEntities : DbContext
    {
        public TradeBulkEntities()
            : base("name=TradeBulkEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AddressType> AddressTypes { get; set; }
        public virtual DbSet<AssignConvertRelation> AssignConvertRelations { get; set; }
        public virtual DbSet<City> Cities { get; set; }
        public virtual DbSet<Country> Countries { get; set; }
        public virtual DbSet<Document> Documents { get; set; }
        public virtual DbSet<DocumentType> DocumentTypes { get; set; }
        public virtual DbSet<Email> Emails { get; set; }
        public virtual DbSet<EmailType> EmailTypes { get; set; }
        public virtual DbSet<Note> Notes { get; set; }
        public virtual DbSet<Phone> Phones { get; set; }
        public virtual DbSet<PhoneType> PhoneTypes { get; set; }
        public virtual DbSet<ProductAssignment> ProductAssignments { get; set; }
        public virtual DbSet<ProductConvert> ProductConverts { get; set; }
        public virtual DbSet<ProductState> ProductStates { get; set; }
        public virtual DbSet<ProductType> ProductTypes { get; set; }
        public virtual DbSet<Rating> Ratings { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<saleType> saleTypes { get; set; }
        public virtual DbSet<State> States { get; set; }
        public virtual DbSet<UserAuctionInfo> UserAuctionInfoes { get; set; }
        public virtual DbSet<UserDetail> UserDetails { get; set; }
        public virtual DbSet<UserDetailAddress> UserDetailAddresses { get; set; }
        public virtual DbSet<UserHierarchy> UserHierarchies { get; set; }
        public virtual DbSet<UserRole> UserRoles { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserTransac> UserTransacs { get; set; }
        public virtual DbSet<UserTransacBroker> UserTransacBrokers { get; set; }
        public virtual DbSet<UserTransacState> UserTransacStates { get; set; }
        public virtual DbSet<UserTransacType> UserTransacTypes { get; set; }
        public virtual DbSet<UserType> UserTypes { get; set; }
        public virtual DbSet<DropDownOnEntity> DropDownOnEntities { get; set; }
        public virtual DbSet<UserDetailEmail> UserDetailEmails { get; set; }
        public virtual DbSet<UserDetailPhone> UserDetailPhones { get; set; }
        public virtual DbSet<Address> Addresses { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<InlineTranscat> InlineTranscats { get; set; }
    }
}