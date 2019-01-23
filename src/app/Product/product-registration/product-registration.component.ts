import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/Service/product.service';
import { Product,Note } from 'src/app/HelperTs/ProductList';

@Component({
  selector: 'app-product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent implements OnInit {

  constructor(private productservice:ProductService) {

   }
   note:Note={subject:'',comment:''};
   prod:Product={ProductName:'',ProductCode:'',quantity:0,description:''};
   selectedImage:File =null;
  ngOnInit() {
  }
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
    debugger;
  }

}

