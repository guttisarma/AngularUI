using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using TradeBulk_Helper;

namespace TradeBulk_Web.Models.AuctionBroadCast
{
    [HubName("currentAuctionTickerMini1")]
    public class CurrentAuctionTickerHub : Hub
    {
        private readonly CurrentAuctionTicker _currentAuctionTicker;

        public CurrentAuctionTickerHub() : this(CurrentAuctionTicker.Instance) { }

        public CurrentAuctionTickerHub(CurrentAuctionTicker CurrentAuctionTicker)
        {
            _currentAuctionTicker = CurrentAuctionTicker;
        }

        public IEnumerable<CurrentAuction> GetAllAuctions()
        {
            return _currentAuctionTicker.GetAllCurrentAuctions();
        }
    }
}
