using TradeBulk_DataLayer.AppData;
using TradeBulk_DataLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Linq.Expressions;
using TradeBulk_BusinessLayer;
using TradeBulk_Helper;
using TradeBulk_Helper.Interfaces;
using TradeBulk_Helper.WebAPIhelper;
using Newtonsoft.Json;
using System.Text;

namespace TradeBulk_BusinessLayer
{
  public delegate void delUpdate(ExAddress a, long b);
  public class UserManagement
  {
    #region Declaration
    GenericRepository<Phone> PhoneRepository;
    GenericRepository<Email> EmailRepository;
    GenericRepository<Address> AddressRepository;
    GenericRepository<UserDetailAddress> UserDetailAddressRepository;
    GenericRepository<UserHierarchy> UserHierarchyRepository;
    GenericRepository<UserDetail> UserDetailRepository;
    GenericRepository<User> UserRepository;
    IExchangeUserInfo UserProfileInfo;
    long CurrentUserPID;
    #endregion

    #region Constractor
    public UserManagement()
    {

    }
    public UserManagement(long currentUserPID)
    {
      this.CurrentUserPID = currentUserPID;
    }
    public UserManagement(IExchangeUserInfo userInfo, long currentUserPID)
    {
      this.CurrentUserPID = currentUserPID;
      this.UserProfileInfo = userInfo;
    }
    #endregion

    //password is not required 
    public bool isUserExists(string username, out long userId)
    {
      if (string.IsNullOrEmpty(username))
      {
        userId = 0;
        return false;
      }

      using (TradeBulkEntities dbContext = new TradeBulkEntities())
      {
        var user = (from us in dbContext.Users
                    where string.Compare(username, us.Username, StringComparison.OrdinalIgnoreCase) == 0
                    && us.IsActive == true
                    select us).FirstOrDefault();

        var userDetails = dbContext.UserDetails.Where(x => x.UserPID == user.UserId);

        userId = userDetails.FirstOrDefault<UserDetail>().UserdetailPID;
        return (user != null) ? true : false;
      }
    }

    public bool ValidateUser(string username, string password, out long userId)
    {
      if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
      {
        userId = 0;
        return false;
      }

      using (TradeBulkEntities dbContext = new TradeBulkEntities())
      {
        //here is the issue
        string cipher = Security.Encrypt(password);
        var user = (from us in dbContext.Users
                    where string.Compare(username, us.Username, StringComparison.OrdinalIgnoreCase) == 0
                    && string.Compare(cipher, us.Password, StringComparison.OrdinalIgnoreCase) == 0
                    && us.IsActive == true
                    select us).FirstOrDefault();


        if (user == null)
        {
          userId = 0;
          return false;
        }
        var userDetails = dbContext.UserDetails.Where(x => x.UserPID == user.UserId);
        userId = userDetails.FirstOrDefault<UserDetail>().UserdetailPID;
        return (user != null) ? true : false;
      }
    }

    public bool ResetPassword(string username, string password, out long userId)
    {
      if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
      {
        userId = 0;
        return false;
      }
      using (UnitOfWork unitOfWork = new UnitOfWork())
      {
        UserDetailRepository = unitOfWork.GetRepoInstance<UserDetail>();
        Expression<Func<UserDetail, object>> parameter1 = v => v.User;
        UserRepository = unitOfWork.GetRepoInstance<User>();
        Expression<Func<UserDetail, object>>[] parameterArray = new Expression<Func<UserDetail, object>>[] { parameter1, /*parameter2, parameter3, parameter4 */};
        IQueryable<UserDetail> userFound = UserDetailRepository.GetAllExpressions(x => x.User.Username == username, null, naProperties: parameterArray);
        if (userFound.Count<UserDetail>() == 1)
        {
          User user = UserRepository.GetByID(userFound.First<UserDetail>().User.UserId);
          user.Password = Security.Encrypt(password);
          UserRepository.Update(user);
          userId = userFound.First<UserDetail>().UserdetailPID;
          unitOfWork.SaveChanges();
          return true;
        }
        else
        {
          userId = 0;
          return false;
        }
      }
    }

    public void SaveNewUserDetails(ref int UserCode, NewUserRegistrationSupport NewUserDeatils)
    {
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          try
          {
            DateTime tryDoB;
            var deDateTime = JsonConvert.DeserializeObject<JsonDate>(NewUserDeatils.strDob);
            tryDoB = new DateTime(deDateTime.year, deDateTime.month, deDateTime.day);
            string userGCode = GenerateUserCode(NewUserDeatils.strFirstName, tryDoB);
            if (ChechUserExistsbyCode(userGCode))
            {
              UserCode = 0;
              return;
            }
            UserManagementExten userMgmtExt = new UserManagementExten();

            #region User Details
            UserDetailRepository = unitOfWork.GetRepoInstance<UserDetail>();
            UserDetail newUser = new UserDetail();
            newUser.FirstName = NewUserDeatils.strFirstName;
            newUser.LastName = NewUserDeatils.strLastName;
            newUser.MiddleName = NewUserDeatils.strMiddleName;
            newUser.CreatedOn = DateTime.UtcNow;
            newUser.DateofBirth = tryDoB;
            newUser.UserCode = userGCode;
            UserDetailRepository.Insert(newUser);

            unitOfWork.SaveChanges();
            UserCode = (int)newUser.UserdetailPID;
            #endregion

            #region Phone
            if (!string.IsNullOrEmpty(NewUserDeatils.PhoneNumber))
            {
              ExPhone ePhone = new ExPhone();
              ePhone.strPhoneNumber = NewUserDeatils.PhoneNumber;
              userMgmtExt.AddUserPhone(ePhone, newUser.UserdetailPID);
            }

            //PhoneRepository = unitOfWork.GetRepoInstance<Phone>();
            //Phone phone = new Phone();
            //phone.Number = NewUserDeatils.PhoneNumber;
            //PhoneRepository.Insert(phone);
            #endregion

            #region Email
            if (!string.IsNullOrEmpty(NewUserDeatils.Email))
            {
              ExEmail eEmail = new ExEmail();
              eEmail.strEmailId = NewUserDeatils.Email;
              userMgmtExt.AddUserEmail(eEmail, newUser.UserdetailPID);
            }

            //EmailRepository = unitOfWork.GetRepoInstance<Email>();
            //Email email = new Email();
            //email.ID = NewUserDeatils.Email;
            //EmailRepository.Insert(email);
            #endregion

            #region Address
            if (!string.IsNullOrEmpty(NewUserDeatils.Address1))
            {
              ExAddress eAddress = new ExAddress();
              eAddress.strAddress1 = NewUserDeatils.Address1;
              eAddress.strAddress2 = NewUserDeatils.Address2;
              eAddress.strAddress3 = NewUserDeatils.Address3;
              userMgmtExt.AddAddresses(eAddress, newUser.UserdetailPID);
            }

            //AddressRepository = unitOfWork.GetRepoInstance<Address>();
            //Address Add = new Address();
            //Add.Address1 = NewUserDeatils.Address1;
            //Add.Address2 = NewUserDeatils.Address2;
            //Add.Address3 = NewUserDeatils.Address3;
            ////Add.Phone = phone;
            //Add.Email = email;
            //AddressRepository.Insert(Add);
            #endregion

            #region User Address Details
            //UserDetailAddressRepository = unitOfWork.GetRepoInstance<UserDetailAddress>();
            //UserDetailAddress UDA = new UserDetailAddress();
            //UDA.Address = Add;
            //UserDetailAddressRepository.Insert(UDA);
            #endregion
          }
          catch (Exception ex)
          {
            UserCode = 0;
            System.Diagnostics.Debug.WriteLine("System Stack :: " + ex.StackTrace + " System Exception Message :: " + ex.Message);
          }
        }
      }
      catch (Exception ex)
      {
        UserCode = 0;
        LogHelper.WriteErrorLog(ex);
      }

    }

    private bool ChechUserExistsbyCode(string userGCode)
    {
      using (UnitOfWork unitOfWork = new UnitOfWork())
      {
        UserDetailRepository = unitOfWork.GetRepoInstance<UserDetail>();
        IQueryable<UserDetail> userDetails = UserDetailRepository.GetAllExpressions(x => x.UserCode == userGCode, null, null);
        if (userDetails.Count<UserDetail>() > 0)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
    }

    public string GenerateUserCode(string FirstName, DateTime dob)
    {
      string totalDob = (dob.Year + dob.Month + dob.Day).ToString();
      StringBuilder result = new StringBuilder();
      for (var item = 0; item < FirstName.Length && item < 4; ++item)
      {

        result.Append(FirstName[item]);
        result.Append(totalDob[item]);
      }
      return result.Remove(0, 1).Append(FirstName[0]).ToString().ToUpper();
    }

    public void ApproveUser(RegUser Description, long Id)
    {
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          GenericRepository<UserDetail> uDetails;
          long id = Convert.ToInt64(Id);
          //uDetailsAddress = unitOfWork.GetRepoInstance<UserDetailAddress>();
          //Expression<Func<UserDetailAddress, object>> parameter1 = v => v.UserDetail;
          //Expression<Func<UserDetailAddress, object>> parameter2 = v => v.Address;
          ////Expression<Func<UserDetailAddress, object>> parameter3 = v => v.Address.Phone;
          ////Expression<Func<UserDetailAddress, object>> parameter4 = v => v.Address.Email;
          //Expression<Func<UserDetailAddress, object>>[] parameterArray = new Expression<Func<UserDetailAddress, object>>[] { parameter1, parameter2/*, parameter3, parameter4 */};
          //IEnumerable<UserDetailAddress> ListUser = uDetailsAddress.GetAllExpressions(x => (x.UserDetail.IsApproved == null && x.UserDetailPID == id), null, naProperties: parameterArray);
          //string EmailID = "";// ListUser.FirstOrDefault<UserDetailAddress>().Address.Email.ID;

          //if (!isAlreadyExists(unitOfWork, EmailID))
          //{
          //check for the emil is not already exists

          uDetails = unitOfWork.GetRepoInstance<UserDetail>();

          UserDetail ApprovedUser = uDetails.GetByID(Convert.ToInt64(Id));
          ApprovedUser.IsActive = true;
          ApprovedUser.IsApproved = true;
          ApprovedUser.ApproveReason = Description.strApprovalReason;
          ApprovedUser.ApprovedDate = DateTime.Now;

          string strPassword = GenrateRandomPassword();
          //User will be created here
          GenericRepository<User> ApprvedUserRepository;
          UserDetailRepository = unitOfWork.GetRepoInstance<UserDetail>();
          ApprvedUserRepository = unitOfWork.GetRepoInstance<User>();

          User user = new User();
          user.FirstName = ApprovedUser.FirstName;
          user.Email = Description.Email;
          user.ActivationCode = Guid.NewGuid();
          user.IsActive = true;
          user.LastName = ApprovedUser.LastName;
          user.Password = Security.Encrypt(strPassword);
          GenericRepository<Role> rolesrepo = unitOfWork.GetRepoInstance<Role>();
          //user.Roles = rolesrepo.GetAllExpressions(x => x.RoleId == 2, null, null, null).ToList<Role>();//Customer Role i being assigned
          string CrypticInfo = new string((Convert.ToInt64(DateTime.Now.ToString("yyyy")) + ApprovedUser.UserdetailPID).ToString().Substring(0, 3).Reverse().ToArray());
          user.Username = ApprovedUser.FirstName.Substring(0, 4).ToUpper() + CrypticInfo;
          //CrypticInfo = string.Empty;
          //CrypticInfo = new string((Convert.ToInt64(((DateTime)ApprovedUser.DateofBirth).ToString("yyyy")) + ApprovedUser.UserdetailPID).ToString().Substring(0, 3).Reverse().ToArray());
          user.UserCode = GenerateUserCode(ApprovedUser.FirstName, (DateTime)ApprovedUser.DateofBirth);// ApprovedUser.FirstName.Substring(0, 4).ToUpper() + CrypticInfo;
          ApprovedUser.User = user;
          UserDetailRepository.Update(ApprovedUser);
          ApprvedUserRepository.Insert(user);


          unitOfWork.SaveChanges();
          //Password will be generated here
          //SendEmail(ToAddress,UserName,Password);
          //Mail will be send from here

          //}
        }
      }
      catch (Exception ex)
      {
        LogHelper.WriteErrorLog(ex);
      }
    }

    private bool isAlreadyExists(UnitOfWork unitOfWork, string EmailID)
    {
      try
      {
        TradeBulkEntities db = new TradeBulkEntities();
        var varible = from x in db.Users select x;
        var v2 = from x in db.UserDetails select x;


        GenericRepository<User> ApprvedUserRepository;
        ApprvedUserRepository = unitOfWork.GetRepoInstance<User>();


        if (ApprvedUserRepository.GetAllExpressions(x => x.Email == EmailID).Count<User>() == 0)
        {
          return false;
        }
      }
      catch (Exception ex)
      {
        LogHelper.WriteErrorLog(ex);
      }
      return true;
    }

    private string GenrateRandomPassword()
    {
      string Password = string.Empty;
      try
      {
        Random random = new Random();
        const string chars = ")(*&^%$#@!ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Password = new string(Enumerable.Repeat(chars, 9).Select(s => s[random.Next(s.Length)]).ToArray());
      }
      catch (Exception ex)
      {
        LogHelper.WriteErrorLog(ex);
      }
      return Password;
    }

    /// <summary>
    /// It will list all the pending users based on currentUserID ,If the user is Admin list all the pending users
    /// if current user is not admin list user only for him
    /// </summary>
    /// <param name="currentUserID"></param>
    public IEnumerable<RegUser> listPendingUserApprovals(long currentUserID,bool isUnApproved)
    {
      List<RegUser> lsregUsers = new List<RegUser>();
      using (UnitOfWork unitOfWork = new UnitOfWork())
      {
        UserDetailRepository = unitOfWork.GetRepoInstance<UserDetail>();

        var CurrentUser = UserDetailRepository.GetByID(currentUserID);

        IQueryable<UserDetail> pendingList;
        //if Curreent user is Admin
        if (isUnApproved)
        {
          if (IsAdmin(CurrentUser))
            pendingList = UserDetailRepository.GetAllExpressions(x => (x.IsApproved == null || x.IsApproved == false), null, null);
          else
            //Need to do it for Other users
            pendingList = UserDetailRepository.GetAllExpressions(x => (x.IsApproved == null || x.IsApproved == false), null, null);
        }
        else
        {
            pendingList = UserDetailRepository.GetAllExpressions(x => (x.IsApproved == true && x.CreatedUserPID==currentUserID), null, null);
        }


        //((System.Data.Entity.Infrastructure.DbQuery<TradeBulk_DataLayer.AppData.UserDetail>)pendingList).Sql+=
        foreach (var item in pendingList)
        {
          RegUser regUser = new RegUser();
          regUser.lRegUserid = item.UserdetailPID;
          regUser.strFirstName = item.FirstName;
          regUser.strLastName = item.LastName;
          regUser.strDob = item.DateofBirth.ToString();
          regUser.UserCode = item.UserCode;
          lsregUsers.Add(regUser);
        }
      }
      return lsregUsers;
    }

    private bool IsAdmin(UserDetail CurrentUser)
    {
      return CurrentUser.IsAdmin == null ? false : (bool)CurrentUser.IsAdmin;
    }

    //Method for Member in group by User /Owner
    public void joinInGroup(string Code, bool byUser, bool byOwner)
    {
      try
      {
        ManageAdminHelper manager = new ManageAdminHelper();
        if (byUser)
        {
          long ownerId = manager.getCurrentUserPID(Code);
          using (UnitOfWork unitOfWork = new UnitOfWork())
          {
            UserHierarchyRepository = unitOfWork.GetRepoInstance<UserHierarchy>();
            UserHierarchy Uhierarchy = new UserHierarchy();
            Uhierarchy.UserDetailPID = this.CurrentUserPID;
            Uhierarchy.ManagerUserDetailPID = ownerId;
            UserHierarchyRepository.Insert(Uhierarchy);
            //Update the Usser ManagerPId
            UserDetailRepository = unitOfWork.GetRepoInstance<UserDetail>();
            UserDetail currentUser = UserDetailRepository.GetByID(this.CurrentUserPID);
            currentUser.ManagerPID = ownerId;
            UserDetailRepository.Update(currentUser);
            unitOfWork.SaveChanges();
          }
        }
        else if (byOwner)
        {
          long userId = manager.getCurrentUserPID(Code);
          using (UnitOfWork unitOfWork = new UnitOfWork())
          {
            UserHierarchyRepository = unitOfWork.GetRepoInstance<UserHierarchy>();
            UserHierarchy Uhierarchy = new UserHierarchy();
            Uhierarchy.UserDetailPID = userId;
            Uhierarchy.ManagerUserDetailPID = this.CurrentUserPID;
            UserHierarchyRepository.Insert(Uhierarchy);
            //Update the Usser ManagerPId
            UserDetailRepository = unitOfWork.GetRepoInstance<UserDetail>();
            UserDetail requiredUser = UserDetailRepository.GetByID(userId);
            requiredUser.ManagerPID = this.CurrentUserPID;
            UserDetailRepository.Update(requiredUser);
            unitOfWork.SaveChanges();
          }
        }
      }
      catch (Exception ex)
      {
        throw ex;
      }

    }
    //List Users in a group
    public List<UserInfo> myUsersList()
    {
      List<UserInfo> lsUserInfo = new List<UserInfo>();
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          UserDetailRepository = unitOfWork.GetRepoInstance<UserDetail>();
          UserDetail manager = UserDetailRepository.GetByID(this.CurrentUserPID);
          UserHierarchyRepository = unitOfWork.GetRepoInstance<UserHierarchy>();
          IQueryable<UserHierarchy> myuserlist;

          //if (IsAdmin(manager))
          //  adminuserlist = UserDetailRepository.GetAllExpressions(x => x.IsActive==true, null, null);
          //else
          myuserlist = UserHierarchyRepository.GetAllExpressions(x => x.ManagerUserDetailPID == this.CurrentUserPID, null, null);
          foreach (var uselist in myuserlist)
          {
            UserInfo UInfo = new UserInfo();
            UserDetail user = UserDetailRepository.GetByID(uselist.UserDetailPID);
            UInfo.UserId = (long)uselist.UserDetailPID;
            UInfo.Name = user.FirstName + " " + user.LastName;
            UInfo.Code = user.UserCode;
            UInfo.ManagerName = manager.FirstName + " " + manager.LastName;
            UInfo.ManagerCode = manager.UserCode;
            lsUserInfo.Add(UInfo);
          }
        }

      }
      catch (Exception ex)
      {

        throw ex;
      }
      return lsUserInfo;
    }
    //My profile Info

    public void UpdateUserProfile(Func<IExchangeUserInfo, long, bool> oprtion)
    {
      oprtion(this.UserProfileInfo, this.CurrentUserPID);
    }

    public void GetUserProfileInfo(Func<long, List<IExchangeUserInfo>> oprtion)
    {
      oprtion(this.CurrentUserPID);
    }
  }
}
