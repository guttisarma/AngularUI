import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/Service/product.service';
import { ProductList } from 'src/app/HelperTs/ProductList';


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
  MockAssProductList:ProductList[];
  MockConProductList:ProductList[];


  ngOnInit() {
  }

  Createdclicked(){
    this.IsCreatedclicked=true;
    this.IsAssignedclicked=false;
    this.IsConvertedclicked=false;
    this.productservice.getMockProductList('Created').subscribe(mockproductlist=>this.MockProductList=mockproductlist);
    
  }
  Assignedclicked() {
    this.IsAssignedclicked=true;
    this.IsCreatedclicked=false;
    this.IsConvertedclicked=false;
    this.productservice.getMockProductList('Assigned').subscribe(mockproductlist=>this.MockAssProductList=mockproductlist);
    
  }
  Convertedclicked(){
    this.IsConvertedclicked=true;
    this.IsCreatedclicked=false;
    this.IsAssignedclicked=false;
    this.productservice.getMockProductList('Converted').subscribe(mockproductlist=>this.MockConProductList=mockproductlist);
   
  }

}



