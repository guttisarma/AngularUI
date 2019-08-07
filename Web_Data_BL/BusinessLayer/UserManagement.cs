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

namespace TradeBulk_BusinessLayer
{
  public delegate void delUpdate(ExAddress a, long b);
  public class UserManagement
  {
    GenericRepository<Phone> PhoneRepository;
    GenericRepository<Email> EmailRepository;
    GenericRepository<Address> AddressRepository;
    GenericRepository<UserDetailAddress> UserDetailAddressRepository;
    GenericRepository<UserHierarchy> UserHierarchyRepository;
    GenericRepository<UserDetail> UserDetailRepository;
    GenericRepository<User> UserRepository;
    IExchangeUserInfo UserProfileInfo;
    long CurrentUserPID;
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

        
        if(user == null)
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
        IQueryable<UserDetail> userFound=UserDetailRepository.GetAllExpressions(x => x.User.Username == username, null, naProperties: parameterArray);
        if (userFound.Count<UserDetail>() == 1)
        {
          User user= UserRepository.GetByID(userFound.First<UserDetail>().User.UserId);
          user.Password= Security.Encrypt(password);
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

    public void SaveNewUserDetails(NewUserRegistrationSupport NewUserDeatils, ref string UserCode)
    {
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          try
          {
            UserManagementExten userMgmtExt = new UserManagementExten();

            #region User Details
            UserDetailRepository = unitOfWork.GetRepoInstance<UserDetail>();
            UserDetail newUser = new UserDetail();
            newUser.FirstName = NewUserDeatils.strFirstName;
            newUser.LastName = NewUserDeatils.strLastName;
            newUser.MiddleName = NewUserDeatils.strMiddleName;
            newUser.DateofBirth = DateTime.Now; //Convert.ToDateTime(NewUserDeatils.strDob);
            //UDA.UserDetail = newUser;
            //newUser.UserDetailAddress.=UDA;
            UserDetailRepository.Insert(newUser);
            #endregion

            #region Phone
            ExPhone ePhone = new ExPhone();
            ePhone.strPhoneNumber = NewUserDeatils.PhoneNumber;
            userMgmtExt.AddUserPhone(ePhone, newUser.UserdetailPID);

            //PhoneRepository = unitOfWork.GetRepoInstance<Phone>();
            //Phone phone = new Phone();
            //phone.Number = NewUserDeatils.PhoneNumber;
            //PhoneRepository.Insert(phone);
            #endregion

            #region Email
            ExEmail eEmail = new ExEmail();
            eEmail.strEmailId = NewUserDeatils.Email;
            userMgmtExt.AddUserEmail(eEmail, newUser.UserdetailPID);

            //EmailRepository = unitOfWork.GetRepoInstance<Email>();
            //Email email = new Email();
            //email.ID = NewUserDeatils.Email;
            //EmailRepository.Insert(email);
            #endregion

            #region Address
            ExAddress eAddress = new ExAddress();
            eAddress.strAddress1 = NewUserDeatils.Address1;
            eAddress.strAddress2 = NewUserDeatils.Address2;
            eAddress.strAddress3 = NewUserDeatils.Address3;
            userMgmtExt.AddAddresses(eAddress, newUser.UserdetailPID);

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



            unitOfWork.SaveChanges();
            UserCode = newUser.UserCode;
          }
          catch (Exception ex)
          {
            UserCode = string.Empty;
            System.Diagnostics.Debug.WriteLine("System Stack :: " + ex.StackTrace + " System Exception Message :: " + ex.Message);
          }
        }
      }
      catch (Exception ex)
      {
        UserCode = string.Empty;
        LogHelper.WriteErrorLog(ex);
      }

    }

    public void ApprovedUser(string Description, string Id)
    {
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          GenericRepository<UserDetail> uDetails;
          GenericRepository<UserDetailAddress> uDetailsAddress;
          long id = Convert.ToInt64(Id);
          uDetailsAddress = unitOfWork.GetRepoInstance<UserDetailAddress>();
          Expression<Func<UserDetailAddress, object>> parameter1 = v => v.UserDetail;
          Expression<Func<UserDetailAddress, object>> parameter2 = v => v.Address;
          //Expression<Func<UserDetailAddress, object>> parameter3 = v => v.Address.Phone;
          //Expression<Func<UserDetailAddress, object>> parameter4 = v => v.Address.Email;
          Expression<Func<UserDetailAddress, object>>[] parameterArray = new Expression<Func<UserDetailAddress, object>>[] { parameter1, parameter2/*, parameter3, parameter4 */};
          IEnumerable<UserDetailAddress> ListUser = uDetailsAddress.GetAllExpressions(x => (x.UserDetail.IsApproved == null && x.UserDetailPID == id), null, naProperties: parameterArray);
          string EmailID = "";// ListUser.FirstOrDefault<UserDetailAddress>().Address.Email.ID;

          if (!isAlreadyExists(unitOfWork, EmailID))
          {
            //check for the emil is not already exists

            uDetails = unitOfWork.GetRepoInstance<UserDetail>();

            UserDetail ApprovedUser = uDetails.GetByID(Convert.ToInt64(Id));
            ApprovedUser.IsActive = true;
            ApprovedUser.IsApproved = true;
            ApprovedUser.ApproveReason = Description;
            ApprovedUser.ApprovedDate = DateTime.Now;

            string strPassword = GenrateRandomPassword();
            //User will be created here
            GenericRepository<User> ApprvedUserRepository;
            ApprvedUserRepository = unitOfWork.GetRepoInstance<User>();

            User user = new User();
            user.FirstName = ApprovedUser.FirstName;
            user.Email = EmailID;
            user.ActivationCode = Guid.NewGuid();
            user.IsActive = true;
            user.LastName = ApprovedUser.LastName;
            user.Password = Security.Encrypt(strPassword);
            GenericRepository<Role> rolesrepo = unitOfWork.GetRepoInstance<Role>();
            //user.Roles = rolesrepo.GetAllExpressions(x => x.RoleId == 2, null, null, null).ToList<Role>();//Customer Role i being assigned
            string CrypticInfo = new string((Convert.ToInt64(DateTime.Now.ToString("yyyy")) + ApprovedUser.UserdetailPID).ToString().Substring(0, 3).Reverse().ToArray());
            user.Username = ApprovedUser.FirstName.Substring(0, 4).ToUpper() + CrypticInfo;
            CrypticInfo = string.Empty;
            CrypticInfo = new string((Convert.ToInt64(((DateTime)ApprovedUser.DateofBirth).ToString("yyyy")) + ApprovedUser.UserdetailPID).ToString().Substring(0, 3).Reverse().ToArray());
            user.UserCode = ApprovedUser.FirstName.Substring(0, 4).ToUpper() + CrypticInfo;
            ApprovedUser.User = user;
            ApprvedUserRepository.Insert(user);


            unitOfWork.SaveChanges();
            //Password will be generated here
            //SendEmail(ToAddress,UserName,Password);
            //Mail will be send from here

          }
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
          IQueryable<UserHierarchy> myuserlist = UserHierarchyRepository.GetAllExpressions(x => x.ManagerUserDetailPID == this.CurrentUserPID, null, null);
          foreach (var uselist in myuserlist)
          {
            UserInfo UInfo = new UserInfo();
            UserDetail user = UserDetailRepository.GetByID(uselist.UserDetailPID);
            UInfo.UserId =(long) uselist.UserDetailPID;
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
