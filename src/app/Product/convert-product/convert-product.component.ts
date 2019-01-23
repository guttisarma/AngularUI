import { Component, OnInit } from '@angular/core';
import {ProductList} from 'src/app/HelperTs/ProductList';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-convert-product',
  templateUrl: './convert-product.component.html',
  styleUrls: ['./convert-product.component.css']
})
export class ConvertProductComponent implements OnInit {

  constructor(private productservice:ProductService) { }
  plist:ProductList[]=[];
  selectedlist:ProductList[]=[];

  ngOnInit() {
    this.getAssignedProducts();
  }
  getAssignedProducts(){
   this.productservice.getMockAssignedProduct().subscribe(list=>this.plist=list);
  }
  addToSelectList(p:ProductList){
    
    for( var i = 0; i < this.plist.length-1; i++){ 
      if ( this.plist[i].Code=== p.Code) {
        this.plist.splice(i, 1); 
      }
   }
   this.selectedlist.push(p);


  }

}
