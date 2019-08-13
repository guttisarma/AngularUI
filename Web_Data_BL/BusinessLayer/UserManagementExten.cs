using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TradeBulk_DataLayer;
using TradeBulk_DataLayer.AppData;
using TradeBulk_Helper;
using TradeBulk_Helper.Interfaces;

namespace TradeBulk_BusinessLayer
{
  public class UserManagementExten
  {

    GenericRepository<Phone> PhoneRepository;
    GenericRepository<Email> EmailRepository;
    GenericRepository<Address> AddressRepository;
    GenericRepository<UserDetailPhone> UserDetailPhoneRepository;
    GenericRepository<UserDetailAddress> UserDetailAddressRepository;
    GenericRepository<UserDetailEmail> UserDetailEmailRepository;

    public bool AddUserPhone(IExchangeUserInfo exchangeUserInfo, long currentUserPID)
    {
      try
      {
        ExPhone phone = (ExPhone)exchangeUserInfo;        
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          PhoneRepository = unitOfWork.GetRepoInstance<Phone>();
          UserDetailPhoneRepository = unitOfWork.GetRepoInstance<UserDetailPhone>();
          IQueryable<UserDetailPhone> userDetailPhones = UserDetailPhoneRepository.GetAllExpressions(x => x.UserDetailPID == currentUserPID && x.IsActive == true, null, null);
          if (userDetailPhones != null && userDetailPhones.Count<UserDetailPhone>() != 0)
          {
            foreach (var item in userDetailPhones)
            {
              item.IsActive = false;
            }
          }
          Phone dbphone = new Phone();
          dbphone.Number = phone.strPhoneNumber;
          dbphone.IsActive = true;
          PhoneRepository.Insert(dbphone);
          UserDetailPhone udPhone = new UserDetailPhone();
          udPhone.IsActive = true;
          udPhone.PhonePID = dbphone.Phonepid;
          udPhone.UserDetailPID = currentUserPID;
          UserDetailPhoneRepository.Insert(udPhone);
          unitOfWork.SaveChanges();
        }
        return true;
      }
      catch (Exception ex)
      {

        return false;
      }

    }

    public bool AddUserEmail(IExchangeUserInfo exchangeUserInfo, long currentUserPID)
    {
      try
      {
        ExEmail email = (ExEmail)exchangeUserInfo;
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          UserDetailEmailRepository = unitOfWork.GetRepoInstance<UserDetailEmail>();
          EmailRepository = unitOfWork.GetRepoInstance<Email>();
          IQueryable<UserDetailEmail> userDetailEmails = UserDetailEmailRepository.GetAllExpressions(x => x.UserDetailPID == currentUserPID && x.IsActive == true, null, null);
          if (userDetailEmails != null && userDetailEmails.Count<UserDetailEmail>() != 0)
          {
            foreach (var item in userDetailEmails)
            {
              item.IsActive = false;
            }
          }
          Email dbEmail = new Email();
          dbEmail.ID = email.strEmailId;
          dbEmail.IsActive = true;
          EmailRepository.Insert(dbEmail);
          UserDetailEmail udEmail = new UserDetailEmail();
          udEmail.IsActive = true;
          udEmail.EmailPID = dbEmail.EmailTypePID;
          udEmail.UserDetailPID = currentUserPID;
          UserDetailEmailRepository.Insert(udEmail);
          unitOfWork.SaveChanges();
        }
        return true;
      }
      catch (Exception)
      {

        return false;
      }

    }

    public bool AddAddresses(IExchangeUserInfo exchangeUserInfo, long currentUserPID)
    {
      try
      {
        ExAddress address = (ExAddress)exchangeUserInfo;
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          UserDetailAddressRepository = unitOfWork.GetRepoInstance<UserDetailAddress>();
          AddressRepository = unitOfWork.GetRepoInstance<Address>();
          IQueryable<UserDetailAddress> userDetailAddresss = UserDetailAddressRepository.GetAllExpressions(x => x.UserDetailPID == currentUserPID && x.IsActive == true, null, null);
          if (userDetailAddresss != null && userDetailAddresss.Count<UserDetailAddress>() != 0)
          {
            foreach (var item in userDetailAddresss)
            {
              item.IsActive = false;
            }
          }
          Address dbAddress = new Address();
          dbAddress.Address1 = address.strAddress1;
          dbAddress.Address2 = address.strAddress2;
          dbAddress.Address3 = address.strAddress3;
          AddressRepository.Insert(dbAddress);
          UserDetailAddress udAddress = new UserDetailAddress();
          udAddress.IsActive = true;
          udAddress.AddressPID = dbAddress.AddressPID;
          udAddress.UserDetailPID = currentUserPID;
          UserDetailAddressRepository.Insert(udAddress);
          unitOfWork.SaveChanges();
        }
        return true;
      }
      catch (Exception)
      {

        return false;
      }
    }

    public List<ExPhone> GetUserPhone(long currentUserPID)
    {
      List<ExPhone> lsExPhones = new List<ExPhone>();
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          UserDetailPhoneRepository = unitOfWork.GetRepoInstance<UserDetailPhone>();
          IQueryable<UserDetailPhone> userDetailPhones = UserDetailPhoneRepository.GetAllExpressions(x => x.UserDetail.UserdetailPID == currentUserPID, null, null);
          foreach (var item in userDetailPhones)
          {
            ExPhone exphone = new ExPhone();
            exphone.strPhoneNumber = item.Phone.Number;
            lsExPhones.Add(exphone);
          }
        }
      }
      catch (Exception ex)
      {

        throw ex;
      }
      return lsExPhones;
    }


    public List<ExEmail> GetUserEmail(long currentUserPID)
    {
      List<ExEmail> lsExEmails = new List<ExEmail>();
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          UserDetailEmailRepository = unitOfWork.GetRepoInstance<UserDetailEmail>();
          IQueryable<UserDetailEmail> userDetailEmails = UserDetailEmailRepository.GetAllExpressions(x => x.UserDetail.UserdetailPID == currentUserPID, null, null);
          foreach (var item in userDetailEmails)
          {
            ExEmail exEmail = new ExEmail();
            exEmail.strEmailId = item.Email.ID;
            lsExEmails.Add(exEmail);
          }
        }
      }
      catch (Exception ex)
      {

        throw ex;
      }
      return lsExEmails;
    }

    public List<ExAddress> GetUserAddress(long currentUserPID)
    {
      List<ExAddress> lsExAddresss = new List<ExAddress>();
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          UserDetailAddressRepository = unitOfWork.GetRepoInstance<UserDetailAddress>();
          IQueryable<UserDetailAddress> userDetailAddresss = UserDetailAddressRepository.GetAllExpressions(x => x.UserDetail.UserdetailPID == currentUserPID, null, null);
          foreach (var item in userDetailAddresss)
          {
            ExAddress exAddress = new ExAddress();
            exAddress.strAddress1 = item.Address.Address1;
            exAddress.strAddress1 = item.Address.Address2;
            exAddress.strAddress1 = item.Address.Address3;
            lsExAddresss.Add(exAddress);
          }
        }
      }
      catch (Exception ex)
      {

        throw ex;
      }
      return lsExAddresss;
    }
  }
}
