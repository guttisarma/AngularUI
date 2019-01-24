using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TradeBulk_DataLayer;
using TradeBulk_DataLayer.AppData;
using TradeBulk_Helper;

namespace TradeBulk_BusinessLayer
{
    class TransactFactory
    {
        GenericRepository<InlineTranscat> InlineTranscatRepository;
        //create a record 
        //Can update the record
        public void CreateTransac(long currentUserPID,long productPID,long amount)
        {
            using (UnitOfWork unitOfWork = new UnitOfWork())
            {
                InlineTranscatRepository = unitOfWork.GetRepoInstance<InlineTranscat>();
                InlineTranscat inlineTranscat = new InlineTranscat();
                inlineTranscat.UserdetailPID = currentUserPID;
                inlineTranscat.ProductPID = productPID;
                inlineTranscat.Amount = amount;
                inlineTranscat.TransactionStatePid =(long) TransactionState.Pending;
                InlineTranscatRepository.Insert(inlineTranscat);
                unitOfWork.SaveChanges();
            }
        }

        public List<InLineTransaction> ListUserInLineTransactions(long currentUserPID)
        {
            List<InLineTransaction> lsInLineTransactions = new List<InLineTransaction>();
            using (UnitOfWork unitOfWork = new UnitOfWork())
            {
                InlineTranscatRepository = unitOfWork.GetRepoInstance<InlineTranscat>();
                IQueryable<InlineTranscat> inlineTranscats= InlineTranscatRepository.GetAllExpressions(x => x.UserdetailPID == currentUserPID, null, null);
                foreach (var inlineTranscat in inlineTranscats)
                {
                    InLineTransaction inLineTransaction = new InLineTransaction();
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
