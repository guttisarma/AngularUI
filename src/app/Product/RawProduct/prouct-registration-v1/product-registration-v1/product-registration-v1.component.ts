import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.service';
import { Product, Note } from 'src/app/HelperTs/ProductList';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-registration-v1',
  templateUrl: './product-registration-v1.component.html',
  styleUrls: ['./product-registration-v1.component.css']
})
export class ProductRegistrationV1Component implements OnInit {

  constructor(private productservice: ProductService, private router: Router) { }
  prod: Product = new Product();

  ngOnInit() {
  }

  submit() {
    this.productservice.registration(this.prod).subscribe(x => {
      this.prod = x;
      this.router.navigateByUrl('/ProductList');
    });
  }
}
