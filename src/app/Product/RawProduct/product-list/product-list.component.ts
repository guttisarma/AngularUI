import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { ProductList, AssignProduct } from 'src/app/HelperTs/ProductList';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productservice: ProductService, private router: Router) { }

  ListofProd: ProductList[];
  pageNumber: number;

  ngOnInit() {
    this.pageNumber = 1;
    this.GetListFromServer(this.pageNumber);
  }

  ChangePageNumber() {
    console.log('page is changed :' + this.pageNumber)
    this.GetListFromServer(this.pageNumber);

  }

  NextPageNumber() {
    this.pageNumber += 1;
    console.log('page is changed :' + this.pageNumber)
    this.GetListFromServer(this.pageNumber);
  }
  GetListFromServer(pageNo:number) {
    this.productservice.getProductList(pageNo).subscribe(lsProduct => this.ListofProd = lsProduct);
  }
  CreateNewPro() {
    this.router.navigateByUrl('/ProductRegistration');
  }
}



