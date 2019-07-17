using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TradeBulk_Helper
{
  public enum EProductType { Inventatory = 1, Stock, Marketing, Others };
  public enum EDocumentType { License = 1, Guarantee, Contract, Diploma, Surety, Warrant, Service, Others, ProfilePhoto };

  public class DocumentViewModel
  {
    public string DocumentPath { get; set; }
    public string MIMEType { get; set; }
  }
  public class NewProductViewModel
  {
    public string Id { get; set; }
    public string ProductName { get; set; }
    public string ProductCode { get; set; }
    public string Price { get; set; }
    public string Quantity { get; set; }
    public string ProductType { get; set; }
    public string AuctionDate { get; set; }
    public string Description { get; set; }
    public StringBuilder ImageData { get; set; }
    public List<DocumentViewModel> Documents { get; set; }
  }
  public class ProductDetailAssignment
  {
    public string AssignProductCode { get; set; }
    public string UserName { get; set; }
    public long Quantity { get; set; }
    public DateTime CreatedOn { get; set; }
  }
  public class ProductDetailConvert
  {
    public string ConvertProductCode { get; set; }
    public long Quantity { get; set; }
    public DateTime CreatedOn { get; set; }
  }
  public class ProductDetails
  {
    public long iCreProdid { get; set; }
    public string strProdName { get; set; }
    public string strProdCode { get; set; }
    public long lQuantity { get; set; }
    public long RemQuantity { get; set; }
    public decimal Price { get; set; }
    public long lProducttypeid { get; set; }
    public string strDescription { get; set; }
    public List<ProductDetailAssignment> PDAssignment { get; set; }
    public List<ProductDetailConvert> PDConvert { get; set; }
  }
}
