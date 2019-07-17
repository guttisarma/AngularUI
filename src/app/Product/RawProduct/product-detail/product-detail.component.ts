import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductService } from '../../product.service';
import { Product, Note, ProductDetailAssignment, ProductDetailConvert } from 'src/app/HelperTs/ProductList';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private productservice: ProductService) { }
  prod$: Observable<Product>;
  proddetail: Product;
  note: Note = { subject: '', comment: '' };
  prod: Product;
  selectedImage: File = null;

  onFileSelected(event) {
    console.log(event.target.files[0]);
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage.name);
  }
  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedImage, this.selectedImage.name);

  }
  submit() {
    this.productservice.registration(this.prod).subscribe(x => this.prod = x);
  }
  ngOnInit() {

    this.prod$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap) => this.productservice.getProdbyCode(params.get('code'))
      )
    )
    //this.proddetail=this.prod$;
    
    this.proddetail=this.dummydata() ;
    console.log(this.proddetail);
  }

  dummydata():Product {
    let proddetail: Product;
    proddetail=new Product();
    proddetail.strProdName = 'Product_Name';
    proddetail.strProdCode = 'Pro_cre_0903';
    proddetail.strDescription = 'Product description';
    proddetail.lQuantity = 9089;
    proddetail.Price = 78900;
    let pad = new ProductDetailAssignment();
    pad.AssignProductCode = 'Pro_As_9809';
    pad.Quantity = 80;
    pad.CreatedOn = new Date;
    let pad1 = new ProductDetailAssignment();
    pad1.AssignProductCode = 'Pro_As_7899';
    pad1.Quantity = 90;
    pad1.CreatedOn = new Date;
    let pad2 = new ProductDetailAssignment();
    pad2.AssignProductCode = 'Pro_As_9809';
    pad2.Quantity = 70;
    pad2.CreatedOn =new Date;
    let pad3 = new ProductDetailAssignment();
    pad3.AssignProductCode = 'Pro_As_4309';
    pad3.Quantity = 30;
    pad3.CreatedOn =new Date;
    proddetail.PDAssignment = Array(pad,pad1,pad2,pad3);
    let pdc=new ProductDetailConvert();
    pdc.ConvertProductCode='Pro_Con_9021'
    pdc.Quantity=39;
    pdc.CreatedOn=new Date;
    let pdc1=new ProductDetailConvert();
    pdc1.ConvertProductCode='Pro_Con_8765'
    pdc1.Quantity=244;
    pdc1.CreatedOn=new Date;
    let pdc2=new ProductDetailConvert();
    pdc2.ConvertProductCode='Pro_Con_7855'
    pdc2.Quantity=24;
    pdc2.CreatedOn=new Date;
    proddetail.PDConvert=Array(pdc,pdc1,pdc2);
    proddetail.RemQuantity = 700;
    return proddetail;
  }
}

