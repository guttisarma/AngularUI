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
 public class TransactFactory : ITransactFactory
  {
    GenericRepository<InlineTranscat> InlineTranscatRepository;
    //create a record 
    //Can update the record
    public void CreateTransac(long actorPID, long? ParticipantPID, long? productPID, decimal amount, long InlineTranscatTypePID)
    {
      using (UnitOfWork unitOfWork = new UnitOfWork())
      {
        IQueryable<InlineTranscat> lsinlineTranscat = InlineTranscatRepository.GetAllExpressions(x=>(x.ProductPID==productPID && x.InlineTranscatTypePID== InlineTranscatTypePID),null,null);
        if(lsinlineTranscat.Count<InlineTranscat>()>0)
        {
          UpdateInlineTranscat(lsinlineTranscat.FirstOrDefault<InlineTranscat>(), InlineTranscatTypePID);
        }

        InlineTranscatRepository = unitOfWork.GetRepoInstance<InlineTranscat>();
        InlineTranscat inlineTranscat = new InlineTranscat();
        inlineTranscat.UserdetailPID = actorPID;
        inlineTranscat.Participant = ParticipantPID;

        inlineTranscat.ProductPID = productPID;
        inlineTranscat.Amount = amount;
        inlineTranscat.TransactionStatePid = (long)TransactionState.Pending;
        InlineTranscatRepository.Insert(inlineTranscat);
        unitOfWork.SaveChanges();
      }
    }
    public bool UpdateInlineTranscat(InlineTranscat inLineTransaction, long InlineTranscatTypePID)
    {
      try
      {
        using (UnitOfWork unitOfWork = new UnitOfWork())
        {
          InlineTranscatRepository = unitOfWork.GetRepoInstance<InlineTranscat>();
          InlineTranscat inlineTranscat = InlineTranscatRepository.GetByID(inLineTransaction.InlineTranscatPID);
          inlineTranscat.Amount =(decimal) inLineTransaction.Amount;
          inlineTranscat.TransactionStatePid = inLineTransaction.TransactionStatePid;
          InlineTranscatRepository.Update(inlineTranscat);
          return true;
        }

      }
      catch (Exception ex)
      {
        LogHelper.WriteErrorLog(ex);

        return false;

      }

    }
    public List<InlineTransaction> ListUserInLinePendingTransactions(long currentUserPID)
    {
      List<InlineTransaction> lsInLineTransactions = new List<InlineTransaction>();
      using (UnitOfWork unitOfWork = new UnitOfWork())
      {
        InlineTranscatRepository = unitOfWork.GetRepoInstance<InlineTranscat>();
        IQueryable<InlineTranscat> inlineTranscats = InlineTranscatRepository.GetAllExpressions(x => x.UserdetailPID == currentUserPID, null, null);
        foreach (var inlineTranscat in inlineTranscats)
        {
          InlineTransaction inLineTransaction = new InlineTransaction();
          inLineTransaction.Amount = inlineTranscat.Amount;
          inLineTransaction.ProductCode = inlineTranscat.Product.Code;
          inLineTransaction.ProductName = inlineTranscat.Product.ProductName;
          inLineTransaction.UserName = inlineTranscat.UserDetail.FirstName + " " + inlineTranscat.UserDetail.LastName;
          //Create date should take
          //inLineTransaction.crea = inlineTranscat.;
          lsInLineTransactions.Add(inLineTransaction);
        }
      }
      return lsInLineTransactions;
    }

    public List<InlineTransaction> ListUserInLineCompleteTransactions(long currentUserPID)
    {
      List<InlineTransaction> lsInLineTransactions = new List<InlineTransaction>();
      using (UnitOfWork unitOfWork = new UnitOfWork())
      {
        InlineTranscatRepository = unitOfWork.GetRepoInstance<InlineTranscat>();
        IQueryable<InlineTranscat> inlineTranscats = InlineTranscatRepository.GetAllExpressions(x => x.UserdetailPID == currentUserPID && x.UserTransacState.Name == "Complete", null, null);
        foreach (var inlineTranscat in inlineTranscats)
        {
          InlineTransaction inLineTransaction = new InlineTransaction();
          inLineTransaction.Amount = inlineTranscat.Amount;
          inLineTransaction.ProductCode = inlineTranscat.Product.Code;
          inLineTransaction.ProductName = inlineTranscat.Product.ProductName;
          inLineTransaction.UserName = inlineTranscat.UserDetail.FirstName + " " + inlineTranscat.UserDetail.LastName;
          //Create date should take
          //inLineTransaction.crea = inlineTranscat.;
          lsInLineTransactions.Add(inLineTransaction);
        }
      }
      return lsInLineTransactions;
    }
  }
}
