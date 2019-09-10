using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using System.Net;
using System.Net.Mail;
using System.Web.Security;
using TradeBulk_Web.Authe_AuthoATION;
using TradeBulk_Web.Migrations;
using TradeBulk_Web.Models;
#pragma warning disable CS0246 // The type or namespace name 'TradeBulk_DataLayer' could not be found (are you missing a using directive or an assembly reference?)
using TradeBulk_DataLayer.AppData;
#pragma warning restore CS0246 // The type or namespace name 'TradeBulk_DataLayer' could not be found (are you missing a using directive or an assembly reference?)
using TradeBulk_BusinessLayer;

namespace TradeBulk_Web.Controllers
{
    [AllowAnonymous]
    public class AccountController : Controller
    {
        private CurrentUser CUser;
        public AccountController()
        {
            if (Response!= null && Response.Cookies != null)
            {
                CUser = new CurrentUser();
                if (Response.Cookies.AllKeys.Contains("LoginUserPID"))
                {
                    CUser.UserPID = Response.Cookies["LoginUserPID"].Value;
                }
                if (Response.Cookies.AllKeys.Contains("IsAdmin"))
                {
                    CUser.IsAdmin = Convert.ToBoolean(Response.Cookies["IsAdmin"].Value);
                }
            }
        }
        // GET: Account  
        public ActionResult Index()
        {
            ViewBag.Message = "Logged in Succesfully";
            return View();
        }

        [HttpGet]
        public ActionResult Login(string ReturnUrl = "")
        {
            if (User.Identity.IsAuthenticated)
            {
                return LogOut();
            }
            ViewBag.ReturnUrl = ReturnUrl;
            return View();
        }

        [HttpPost]
        public ActionResult Login(LoginView loginView, string ReturnUrl = "")
        {
            if (ModelState.IsValid)
            {
                if (Membership.ValidateUser(loginView.UserName, loginView.Password))
                {
                    var user = (CustomMembershipUser)Membership.GetUser(loginView.UserName, false);
                    if (user != null)
                    {
                        CustomSerializeModel userModel = new Models.CustomSerializeModel()
                        {
                            UserId = user.UserId,
                            FirstName = user.FirstName,
                            LastName = user.LastName,
                            UserCode=user.UserCode,
                            RoleName = user.Roles.Select(r => r.RoleName).ToList()
                            
                        };

                        string userData = JsonConvert.SerializeObject(userModel);
                        FormsAuthenticationTicket authTicket = new FormsAuthenticationTicket
                            (
                            1, loginView.UserName, DateTime.Now, DateTime.Now.AddMinutes(15), false, userData
                            );
                        long CurrentUserPID = getCurrentUserPID(userModel);
                        string enTicket = FormsAuthentication.Encrypt(authTicket);
                        HttpCookie faCookie = new HttpCookie("Cookie1", enTicket);
                        HttpCookie LoginUser = new HttpCookie("LoginUserPID", CurrentUserPID.ToString());
                        HttpCookie IsAdmin = new HttpCookie("IsAdmin", "FALSE");
                        Response.Cookies.Add(faCookie);
                        Response.Cookies.Add(LoginUser);
                        Response.Cookies.Add(IsAdmin);


                    }

                    if (Url.IsLocalUrl(ReturnUrl))
                    {
                        return Redirect(ReturnUrl);
                    }
                    else
                    {
                        return RedirectToAction("Index");
                    }
                }
            }
            ModelState.AddModelError("", "Something Wrong : Username or Password invalid ^_^ ");
            return View(loginView);
        }

        private long getCurrentUserPID(CustomSerializeModel userModel)
        {
            ManageAdminHelper MAHelper = new ManageAdminHelper();
            return  MAHelper.getCurrentUserPID(userModel.UserCode);
        }

        [HttpGet]
        public ActionResult Registration()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Registration(RegistrationView registrationView)
        {
            bool statusRegistration = false;
            string messageRegistration = string.Empty;

            if (ModelState.IsValid)
            {
                // Email Verification  
                string userName = Membership.GetUserNameByEmail(registrationView.Email);
                if (!string.IsNullOrEmpty(userName))
                {
                    ModelState.AddModelError("Warning Email", "Sorry: Email already Exists");
                    return View(registrationView);
                }

                //Save User Data   
                using (TradeBulkEntities dbContext = new TradeBulkEntities())
                {
                    var user = new User()
                    {
                        Username = registrationView.Username,
                        FirstName = registrationView.FirstName,
                        LastName = registrationView.LastName,
                        Email = registrationView.Email,
                        Password =Security.Encrypt(registrationView.Password),
                        ActivationCode = Guid.NewGuid(),
                    };
                    
                    dbContext.Users.Add(user);
                    dbContext.SaveChanges();
                    var RoleInfo = (from roles in dbContext.Roles select roles.RoleName).ToList<string>();
                    ViewBag.AvailableRoles =new SelectList( RoleInfo.ToList(),"Name","Name");
                }

                //Verification Email  
                VerificationEmail(registrationView.Email, registrationView.ActivationCode.ToString());
                messageRegistration = "Your account has been created successfully. ^_^";
                statusRegistration = true;
            }
            else
            {
                messageRegistration = "Something Wrong!";
            }
            ViewBag.Message = messageRegistration;
            ViewBag.Status = statusRegistration;

            return View(registrationView);
        }

        [HttpGet]
        public ActionResult ActivationAccount(string id)
        {
            bool statusAccount = false;
            using (TradeBulkEntities dbContext = new TradeBulkEntities())
            {
                var userAccount = dbContext.Users.Where(u => u.ActivationCode.ToString().Equals(id)).FirstOrDefault();

                if (userAccount != null)
                {
                    userAccount.IsActive = true;
                    dbContext.SaveChanges();
                    statusAccount = true;
                }
                else
                {
                    ViewBag.Message = "Something Wrong !!";
                }

            }
            ViewBag.Status = statusAccount;
            return View();
        }

        public ActionResult LogOut()
        {
            HttpCookie cookie = new HttpCookie("Cookie1", "");
            cookie.Expires = DateTime.Now.AddYears(-1);
            Response.Cookies.Add(cookie);

            FormsAuthentication.SignOut();
            return RedirectToAction("Login", "Account", null);
        }

        [NonAction]
        public void VerificationEmail(string email, string activationCode)
        {
            var url = string.Format("/Account/ActivationAccount/{0}", activationCode);
            var link = Request.Url.AbsoluteUri.Replace(Request.Url.PathAndQuery, url);

            var fromEmail = new MailAddress("jagadeesh837@gmail.com", "Activation Account - AKKA");
            var toEmail = new MailAddress(email);

            var fromEmailPassword = "Kowsalya143<3";
            string subject = "Activation Account !";

            string body = "<br/> Please click on the following link in order to activate your account" + "<br/><a href='" + link + "'> Activation Account ! </a>";

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromEmail.Address, fromEmailPassword)
            };

            using (var message = new MailMessage(fromEmail, toEmail)
            {
                Subject = subject,
                Body = body,
                IsBodyHtml = true

            })
                try
                {
                    smtp.Send(message);

                }
#pragma warning disable CS0168 // The variable 'ex' is declared but never used
                catch(Exception ex)
#pragma warning restore CS0168 // The variable 'ex' is declared but never used
                {
                    //Exception need to resolved.
                }
        }

        
        [HttpGet]
        public ActionResult CurrentAcutionInfo()
        {
            if(true)//!CUser.IsAdmin)
            {
                List<AuctionInfo> lsAuction = new List<AuctionInfo>();
                lsAuction.Add(new AuctionInfo() {PID=1, UserName = "Jagadeesh", AuctionAmount = 123892, TimeStamp = "12:08 AM" });
                lsAuction.Add(new AuctionInfo() { PID = 2, UserName = "Anandh", AuctionAmount = 244542, TimeStamp = "12:08 AM" });
                lsAuction.Add(new AuctionInfo() { PID=3, UserName = "Rahul", AuctionAmount = 345667, TimeStamp = "12:09 AM" });
                lsAuction.Add(new AuctionInfo() { PID=4, UserName = "Kamal", AuctionAmount = 875543, TimeStamp = "12:10 AM" });
                lsAuction.Add(new AuctionInfo() { PID=5, UserName = "Prema", AuctionAmount = 1123445, TimeStamp = "12:11 AM" });
                lsAuction.Add(new AuctionInfo() { PID=6, UserName = "Kiran", AuctionAmount = 1289754, TimeStamp = "12:12 AM" });
                lsAuction.Add(new AuctionInfo() { PID=7, UserName = "Sakshi", AuctionAmount = 134567, TimeStamp = "12:13 AM" });
                lsAuction.Add(new AuctionInfo() { PID=8, UserName = "Mamatha", AuctionAmount = 156000, TimeStamp = "12:13 AM" });
                lsAuction.Add(new AuctionInfo() { PID = 9, UserName = "Srelatha", AuctionAmount = 166000, TimeStamp = "12:14 AM" });

                return View(lsAuction);
            }
#pragma warning disable CS0162 // Unreachable code detected
            return View();
#pragma warning restore CS0162 // Unreachable code detected
        }
    }
}
