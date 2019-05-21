import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/Service/product.service';
import { ProductList,AssignProduct } from 'src/app/HelperTs/ProductList';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productservice:ProductService) { }
  IsCreatedclicked:boolean;
  IsAssignedclicked:boolean;
  IsConvertedclicked:boolean;

  MockProductList:ProductList[];
  MockAssignProduct:AssignProduct[];
  MockConProductList:ProductList[];


  ngOnInit() {
  }

  Createdclicked(){
    this.IsCreatedclicked=true;
    this.IsAssignedclicked=false;
    this.IsConvertedclicked=false;
    alert("Created");
    this.productservice.getProductList('Created').subscribe(mockproductlist=>this.MockProductList=mockproductlist);
    
  }
  Assignedclicked() {
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
   
  }

}



