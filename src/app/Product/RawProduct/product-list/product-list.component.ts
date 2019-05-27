import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';
import { ProductList,AssignProduct } from 'src/app/HelperTs/ProductList';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productservice:ProductService) { }
  
  ListofProd:ProductList[];
  


  ngOnInit() {
    this.Createdclicked();
  }

  Createdclicked(){
   
    this.productservice.getProductList().subscribe(lsProduct=>this.ListofProd=lsProduct);
    
  }
  /*Assignedclicked() {
    this.IsAssignedclicked=true;
    this.IsCreatedclicked=false;
    this.IsConvertedclicked=false;
    //this.productservice.getProductList('Assigned').subscribe(mockproductlist=>this.MockAssignProduct=mockproductlist);
    
  }
  Convertedclicked(){
    this.IsConvertedclicked=true;
    this.IsCreatedclicked=false;
    this.IsAssignedclicked=false;
    this.productservice.getProductList('Converted').subscribe(mockproductlist=>this.MockConProductList=mockproductlist);
   
  }*/

}



