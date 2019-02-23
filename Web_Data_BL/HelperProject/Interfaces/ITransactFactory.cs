using System.Collections.Generic;
using TradeBulk_Helper;

namespace TradeBulk_Helper.Interfaces
{
  public interface ITransactFactory
  {
    void CreateTransac(long actorPID, long? ParticipantPID, long productPID, long amount);
    List<InLineTransaction> ListUserInLinePendingTransactions(long currentUserPID);
    List<InLineTransaction> ListUserInLineCompleteTransactions(long currentUserPID);
    bool UpdateInlineTranscat(InLineTransaction inLineTransaction);

  }
}
