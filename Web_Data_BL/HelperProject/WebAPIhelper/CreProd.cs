using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TradeBulk_Helper.WebAPIhelper
{
  public class CreProd
  {
    public int iCreProdid { get; set; }
    public string strProdName { get; set; }
    public string strProdCode { get; set; }
    public long lQuantity { get; set; }
    public long Price { get; set; }
    public long lProducttypeid { get; set; }
    public string strDescription { get; set; }
    public List<Note> lsNotes { get; set; }
  }

}
