import { Component, OnInit } from '@angular/core';
import { ProductList,AssignProductView } from 'src/app/HelperTs/ProductList';
import { ProductService } from '../../product.service';


@Component({
  selector: 'app-convert-product',
  templateUrl: './convert-product.component.html',
  styleUrls: ['./convert-product.component.css']
})
export class ConvertProductComponent implements OnInit {

  constructor(private productService: ProductService) { }
  Plist: ProductList[] = [];
  selectedlist: ProductList[] = [];
  proCodeKey: string;
  public isCollapsed = false;
  assignProView: AssignProductView[]=[];
  ngOnInit() {
   this.dummyData();
    let diffUser:any;
    diffUser=this.Plist.map(x=>x.AssignedUserName).filter(function(elem, index, self) {
      return index === self.indexOf(elem);
  })
  
  for(let i=0;i<diffUser.length;++i){
    let aPV=new AssignProductView();
    aPV.AssignUser=diffUser[i];
    aPV.lsproduct=[];
    aPV.lsproduct.push(...this.Plist.filter(x=>x.AssignedUserName===diffUser[i]));
    console.log(this.assignProView);
    this.assignProView.push(aPV);
  }
    console.log(this.assignProView);
    
    /* this.productService.getProductList().subscribe(lsProduct => {
      this.Plist = lsProduct.filter(x=>{
        return x.AssignedUserName;
      });
    }); */
  }
  deleteSel(p:ProductList){
    this.selectedlist= this.selectedlist.filter(ele=>{
      ele.Code!=p.Code;
    });
  }
  addToSelectList(p: ProductList) {

    for (var i = 0; i < this.Plist.length - 1; i++) {
      if (this.Plist[i].Code === p.Code) {
        this.Plist.splice(i, 1);
      }
    }
    this.selectedlist.push(p);


  }
  searchProductCode() {

  }
  dummyData(){
    let p=new ProductList();
    p.Name='asd';
    p.Code='Code';
    p.Quantity=32;
    p.RemQuantity=3;
    p.Description='Descriptions';
    p.AssignedUserName='Jagadeesh';
    this.Plist.push(p);
    let p1=new ProductList();
    p1.Name='kdj';
    p1.Code='dsflf';
    p1.Quantity=78;
    p1.RemQuantity=9;
    p1.Description='Descriptions';
    p1.AssignedUserName='Jagadeesh';
    this.Plist.push(p1);
    let p2=new ProductList();
    p2.Name='grfg';
    p2.Code='efed';
    p2.Quantity=8;
    p2.RemQuantity=3;
    p2.Description='Desmk criptions';
    p2.AssignedUserName='Jagadeesh';
    this.Plist.push(p2);
    let p3=new ProductList();
    p3.Name='gcvnvm';
    p3.Code='m cmed';
    p3.Quantity=3;
    p3.RemQuantity=1;
    p3.Description='Desmk cricvn ions';
    p3.AssignedUserName='Jagadeesh';
    this.Plist.push(p3);
    let p4=new ProductList();
    p4.Name='gdkskd';
    p4.Code='kjdcved';
    p4.Quantity=7;
    p4.RemQuantity=3;
    p4.Description='demi govern';
    p4.AssignedUserName='Jagadeesh';
    this.Plist.push(p4);
    let p5=new ProductList();
    p5.Name='jkjb b';
    p5.Code='erdr';
    p5.Quantity=8;
    p5.RemQuantity=3;
    p5.Description='nnbvhbn';
    p5.AssignedUserName='Jagadeesh';
    this.Plist.push(p5);
    let p6=new ProductList();
    p6.Name='jksksdc';
    p6.Code='k dcc';
    p6.Quantity=94;
    p6.RemQuantity=93;
    p6.Description='nnbxc   cxc ksdmn';
    p6.AssignedUserName='Sharma';
    this.Plist.push(p6);
    let p7=new ProductList();
    p7.Name='jksksdc';
    p7.Code='k dcc';
    p7.Quantity=94;
    p7.RemQuantity=93;
    p7.Description='nnbxc   cxc ksdmn';
    p7.AssignedUserName='Sharma';
    this.Plist.push(p7);
  }

}
