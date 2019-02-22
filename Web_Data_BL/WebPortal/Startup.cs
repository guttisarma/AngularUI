using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(TradeBulk_Web.Models.AuctionBroadCast.Startup))]

namespace TradeBulk_Web.Models.AuctionBroadCast
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
      
            // Any connection or hub wire up and configuration should go here
            app.MapSignalR();
        }

    }
}
