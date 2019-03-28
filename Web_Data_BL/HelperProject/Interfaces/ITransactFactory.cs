using System.Collections.Generic;
using TradeBulk_DataLayer.AppData;
using TradeBulk_Helper;

namespace TradeBulk_Helper.Interfaces
{
  public interface ITransactFactory
  {
    void CreateTransac(long actorPID, long? ParticipantPID, long? productPID, decimal amount , long InlineTranscatTypePID);
    List<InlineTransaction> ListUserInLinePendingTransactions(long currentUserPID);
    List<InlineTransaction> ListUserInLineCompleteTransactions(long currentUserPID);
    bool UpdateInlineTranscat(InlineTranscat inLineTransaction, long InlineTranscatTypePID);

  }
}
