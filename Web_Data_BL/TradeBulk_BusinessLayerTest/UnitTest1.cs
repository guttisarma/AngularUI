using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TradeBulk_BusinessLayer;
using TradeBulk_Helper;
using Moq;
using TradeBulk_DataLayer;

namespace TradeBulk_BusinessLayerTest
{
  [TestClass]
  public class UnitTest1
  {
    //[TestMethod]
    //public void TestMethod1()
    //{
    //  UserManagement userManagement = new UserManagement();
    //  NewUserRegistrationSupport newUserRegistrationSupport = new NewUserRegistrationSupport();
    //  Mock<UnitOfWork> mock = new Mock<UnitOfWork>();
    //  mock.Setup(m => m.SaveChanges());
    //  int UserId = 0;
    //  newUserRegistrationSupport.strFirstName = "jagadeesh";
    //  newUserRegistrationSupport.strLastName = "sharma";
    //  newUserRegistrationSupport.strDob = @"{""year"":2019,""month"":8,""day"":1}";
    //  newUserRegistrationSupport.PhoneNumber = "8905674321";
    //  newUserRegistrationSupport.Email = "gutti@outlook.in";
    //  userManagement.SaveNewUserDetails(ref UserId, newUserRegistrationSupport); 2036

    //}
    [TestMethod]
    public void CheckUserCodeLogic()
    {
      UserManagement userManagement = new UserManagement();
      string result= userManagement.GenerateUserCode("Jagadeesh", new DateTime(2019, 8, 9));

      Assert.AreEqual(result, "2A0G3A6J");

    }
  }
}
