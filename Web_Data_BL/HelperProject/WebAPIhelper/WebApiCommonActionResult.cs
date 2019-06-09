using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace TradeBulk_Helper.WebAPIhelper
{
  class WebApiCommonActionResult //: IHttpActionResult
  {
    string _value;
    HttpRequestMessage _request;

    public WebApiCommonActionResult(string value, HttpRequestMessage request)
    {
      _value = value;
      _request = request;
    }
    public Task<HttpResponseMessage> ExecuteAsync(CancellationToken cancellationToken)
    {
      var response = new HttpResponseMessage()
      {
        Content = new StringContent(_value),
        RequestMessage = _request
      };
      return Task.FromResult(response);
    }
  }
}
