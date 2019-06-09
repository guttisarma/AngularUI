import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap} from '@angular/router'
import {switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {ProductService} from '../../product.service';
import { Product,Note } from 'src/app/HelperTs/ProductList';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private productservice:ProductService) { }
  prod$:Observable<Product>;
  proddetail:Product;
  note:Note={subject:'',comment:''};
   prod:Product;
   selectedImage:File =null;
 
  onFileSelected(event){
    console.log(event.target.files[0]);
    this.selectedImage=event.target.files[0];
    console.log(this.selectedImage.name);
  }
  onUpload(){
    const fd=new FormData();
    fd.append('image',this.selectedImage,this.selectedImage.name);
    
  }
  submit(){
    this.productservice.registration(this.prod).subscribe(x=>this.prod=x);
  }
  ngOnInit() {
    
 this.prod$=this.route.paramMap.pipe(
      switchMap(
        (params:ParamMap)=>this.productservice.getProdbyCode(params.get('code'))
    )
    )
    //this.proddetail=this.prod$;
  }

}
