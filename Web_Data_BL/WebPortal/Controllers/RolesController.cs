using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using TradeBulk_Web.Authe_AuthoATION;
#pragma warning disable CS0246 // The type or namespace name 'TradeBulk_DataLayer' could not be found (are you missing a using directive or an assembly reference?)
using TradeBulk_DataLayer.AppData;
#pragma warning restore CS0246 // The type or namespace name 'TradeBulk_DataLayer' could not be found (are you missing a using directive or an assembly reference?)

namespace TradeBulk_Web.Controllers
{
    public class RolesController : Controller
    {
#pragma warning disable CS0246 // The type or namespace name 'TradeBulkEntities' could not be found (are you missing a using directive or an assembly reference?)
        private TradeBulkEntities db = new TradeBulkEntities();
#pragma warning restore CS0246 // The type or namespace name 'TradeBulkEntities' could not be found (are you missing a using directive or an assembly reference?)

        // GET: Roles
        public async Task<ActionResult> Index()
        {
            return View(await db.Roles.ToListAsync());
        }

        // GET: Roles/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Role role = await db.Roles.FindAsync(id);
            if (role == null)
            {
                return HttpNotFound();
            }
            return View(role);
        }

        // GET: Roles/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Roles/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
#pragma warning disable CS0246 // The type or namespace name 'Role' could not be found (are you missing a using directive or an assembly reference?)
        public async Task<ActionResult> Create([Bind(Include = "RoleId,RoleName")] Role role)
#pragma warning restore CS0246 // The type or namespace name 'Role' could not be found (are you missing a using directive or an assembly reference?)
        {
            if (ModelState.IsValid)
            {
                db.Roles.Add(role);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(role);
        }

        // GET: Roles/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Role role = await db.Roles.FindAsync(id);
            if (role == null)
            {
                return HttpNotFound();
            }
            return View(role);
        }

        // POST: Roles/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
#pragma warning disable CS0246 // The type or namespace name 'Role' could not be found (are you missing a using directive or an assembly reference?)
        public async Task<ActionResult> Edit([Bind(Include = "RoleId,RoleName")] Role role)
#pragma warning restore CS0246 // The type or namespace name 'Role' could not be found (are you missing a using directive or an assembly reference?)
        {
            if (ModelState.IsValid)
            {
                db.Entry(role).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(role);
        }

        // GET: Roles/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Role role = await db.Roles.FindAsync(id);
            if (role == null)
            {
                return HttpNotFound();
            }
            return View(role);
        }

        // POST: Roles/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Role role = await db.Roles.FindAsync(id);
            db.Roles.Remove(role);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
