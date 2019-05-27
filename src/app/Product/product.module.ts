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
import {ProductService} from './product.service';;

@NgModule({
  declarations: [
    ProductRegistrationComponent,
    ProductListComponent,
    ProductDetailComponent,
    AssignProductComponent,
    ConvertProductComponent,
    DragComponent,
    ProductMgrComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    ProductService,
    ProductRoutingModule
  ]
})
export class ProductModule { }
