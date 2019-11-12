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


const prodRoute=[
  { path:'ProductRegistration',component:ProductRegistrationComponent,CanDeactivate:['IsProductGetDirty']},
  {path:'ProductList',component:ProductListComponent},
  {path:'ProductDetail/:id',component:ProductDetailComponent},
  {path:'AssignProduct',component:AssignProductComponent},  
  {path:'MyDragProduct',component:DragComponent},
  {path:'ConvertProduct',component:ConvertProductComponent},
  {path:'ProductCenter',component:ProductMgrComponent}]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(prodRoute)
  ],
  exports:[RouterModule]
  
})
export class ProductRoutingModule { 
  
}

