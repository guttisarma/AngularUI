
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TradeBulk_Web.Models.Administrator
{
//    public class NewUserRegistrationHelper
//    {
//        public void SaveNewUserDetails(NewUserRegistrationSupport NewUserDeatils)
//        {
//            using(TradeBulkEntities1 TBentities = new TradeBulkEntities1())
//                {
//                    using (var transaction = TBentities.Database.BeginTransaction())
//                    {
//                        try
//                        {
//                            #region Phone
//                        Phone phone = new Phone();
//                        phone.Number = NewUserDeatils.PhoneNumber;
//                        #endregion

//                            #region Email
//                        Email email = new Email();
//                        email.ID = NewUserDeatils.Email;
//                        #endregion

//                            #region Address
//                        Address Add = new Address();
//                        Add.Address1 = NewUserDeatils.Address1;
//                        Add.Address2 = NewUserDeatils.Address2;
//                        Add.Address3 = NewUserDeatils.Address3;
//                        Add.Phone = TBentities.Phones.Add(phone);
//                        Add.Email = TBentities.Emails.Add(email);
//                        #endregion

//                            #region User Address Details

//                        UserDetailAddress UDA = new UserDetailAddress();
//                        UDA.Address = TBentities.Addresses.Add(Add);
//                        #endregion

//                            #region User Details

//                        UserDetail newUser = new UserDetail();
//                        newUser.FirstName = NewUserDeatils.FirstName;
//                        newUser.LastName = NewUserDeatils.LastName;
//                        newUser.MiddleName = NewUserDeatils.MiddleName;
//                        newUser.DateofBirth = NewUserDeatils.Dob;

//                        UDA.UserDetail = TBentities.UserDetails.Add(newUser);
//                        newUser.UserDetailAddresses.Add(TBentities.UserDetailAddresses.Add(UDA));
//#endregion

//                            TBentities.SaveChanges();
//                            transaction.Commit();
//                        }
//                        catch (Exception ex)
//                        {
//                            transaction.Rollback();
//                        }
//                    }                
//            }
//        }
//    }
}