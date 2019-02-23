using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TradeBulk_Helper;
using TradeBulk_Helper.Interfaces;

namespace TradeBulk_Web.Controllers.WebApi
{
  public class InlineTranscatController : ApiController
  {
    ITransactFactory transactFactory;
    long currentUserID = -1;
    // GET api/<controller>
    public List<InLineTransaction> GetPending()
    {
     List<InLineTransaction> lsInlineTransac= transactFactory.ListUserInLinePendingTransactions(currentUserID);
      return lsInlineTransac;
    }
    public List<InLineTransaction> GetComplete()
    {
      List<InLineTransaction> lsInlineTransac = transactFactory.ListUserInLineCompleteTransactions(currentUserID);
      return lsInlineTransac;
    }

    // GET api/<controller>/5
    public string Get(int id)
    {
      return "value";
    }

    // POST api/<controller> Nothing post here
    public void Post([FromBody]string value)
    {
    }

    // PUT api/<controller>/5
    public void Put(InLineTransaction inLineTransaction)
    {
      transactFactory.UpdateInlineTranscat(inLineTransaction);
    }

    // DELETE api/<controller>/5
    public void Delete(int id)
    {
    }
  }
}
