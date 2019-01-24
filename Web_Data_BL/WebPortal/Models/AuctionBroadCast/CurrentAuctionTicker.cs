using TradeBulk_Helper;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using TradeBulk_BusinessLayer;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace TradeBulk_Web.Models.AuctionBroadCast
{
    public class CurrentAuctionTicker //:Controller
    {
        // Singleton instance
        private readonly static Lazy<CurrentAuctionTicker> _instance = new Lazy<CurrentAuctionTicker>(() => new CurrentAuctionTicker(GlobalHost.ConnectionManager.GetHubContext<CurrentAuctionTickerHub>().Clients));
        AuctionProvider auctionProvider = new AuctionProvider();

        private readonly ConcurrentBag<CurrentAuction> _currentAuctions = new ConcurrentBag<CurrentAuction>();

        private readonly object _updateCurrentAuctionPricesLock = new object();

        //CurrentAuction can go up or down by a percentage of this factor on each change
        //private readonly double _rangePercent = .002;

        private readonly TimeSpan _updateInterval = TimeSpan.FromMilliseconds(250);
        private readonly Random _updateOrNotRandom = new Random();

        private readonly Timer _timer;
        private volatile bool _updatingCurrentAuctionPrices = false;

        private CurrentAuctionTicker(IHubConnectionContext<dynamic> clients)
        {
            Clients = clients;
            
            int currentUserPID = ((TradeBulk_Web.Authe_AuthoATION.CustomPrincipal)System.Web.HttpContext.Current.User).UserId;
            List<CurrentAuction> lsAcution = auctionProvider.GetIntialAuction(currentUserPID);
            foreach (CurrentAuction ca in lsAcution)
            {
                _currentAuctions.Add(ca);
            }
            _timer = new Timer(UpdateCurrentAuctionPrices, null, _updateInterval, _updateInterval);

        }

        public static CurrentAuctionTicker Instance
        {
            get
            {
                
                return _instance==null?null:_instance.Value;
            }
        }

        private IHubConnectionContext<dynamic> Clients
        {
            get;
            set;
        }

        public IEnumerable<CurrentAuction> GetAllCurrentAuctions()
        {
            return _currentAuctions;
        }

        private void UpdateCurrentAuctionPrices(object state)
        {
            int currentUserPID = 11;// ((TradeBulk_Web.Authe_AuthoATION.CustomPrincipal)System.Web.HttpContext.Current.User).UserId;

            lock (_updateCurrentAuctionPricesLock)
            {
                if (!_updatingCurrentAuctionPrices)
                {
                    _updatingCurrentAuctionPrices = true;

                    foreach (var CurrentAuction in _currentAuctions)
                    {
                        if (auctionProvider.isAnyUpdate(currentUserPID))
                        {
                            BroadcastCurrentAuctionPrice(CurrentAuction);
                        }
                    }

                    _updatingCurrentAuctionPrices = false;
                }
            }
        }

        private bool TryUpdateCurrentAuctionPrice(CurrentAuction CurrentAuction)
        {

            
            return true;
        }

        private void BroadcastCurrentAuctionPrice(CurrentAuction CurrentAuction)
        {
            Clients.All.updateCurrentAuctionPrice(CurrentAuction);
        }
    }
}