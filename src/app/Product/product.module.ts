import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRegistrationComponent } from './RawProduct/product-registration/product-registration.component';
import { ProductListComponent } from './RawProduct/product-list/product-list.component';
import { ProductDetailComponent } from './RawProduct/product-detail/product-detail.component';
import {ProductMgrComponent} from './product-mgr/product-mgr.component';
import { AssignProductComponent } from './AssignProduct/assign-product/assign-product.component';
import { ConvertProductComponent } from './ConvertProduct/convert-product/convert-product.component';
import {DragComponent} from './Dragable_Product/drag/drag.component';
import { RouterModule } from '@angular/router';
import {ProductRoutingModule} from './product-routing.module';
import {ProductService} from './product.service';import { FormsModule } from '@angular/forms';
import {AssignedProductListComponent} from './AssignProduct/assigned-product-list/assigned-product-list.component';
;

@NgModule({
  declarations: [
    ProductRegistrationComponent,
    ProductListComponent,
    ProductDetailComponent,
    AssignProductComponent,
    AssignedProductListComponent,
    ConvertProductComponent,
    DragComponent,
    ProductMgrComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }