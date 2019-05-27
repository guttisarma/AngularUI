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
  ngOnInit() {
    
 this.prod$=this.route.paramMap.pipe(
      switchMap(
        (params:ParamMap)=>this.productservice.getProdbyCode(params.get('code'))
    )
    )

  }

}
