import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiOptionComponent } from './multi-option/multi-option.component';
import { UserRegistrationComponent } from './User/Registration/user-registration/user-registration.component';
import { UserProfileComponent } from './User/Profile/user-profile.component';
import { UserListComponent } from './User/List/user-list/user-list.component';
import { UserDetailComponent } from './User/Detail/user-detail/user-detail.component';
import { ProductRegistrationComponent } from './Product/product-registration/product-registration.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { AssignProductComponent } from './Product/assign-product/assign-product.component';
import { ConvertProductComponent } from './Product/convert-product/convert-product.component';
import { TransacListComponent } from './Transaction/transac-list/transac-list.component';
import { UserInComponent } from './User/SignIn/sign-in/User-in.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragComponent} from './Product/Dragable_Product/drag/drag.component';

const routes: Routes = [
  {path:'\UserRegister',component:UserRegistrationComponent},
  {path:'\UserProfile',component:UserProfileComponent},
  {path:'\UserList',component:UserListComponent},
  {path:'\UserDetail',component:UserDetailComponent},
  {path:'\SignIn',component:UserInComponent},
  {path:'\ProductRegistration',component:ProductRegistrationComponent},
  {path:'\ProductList',component:ProductListComponent},
  {path:'\ProductDetail',component:ProductDetailComponent},
  {path:'\AssignProduct',component:AssignProductComponent},
  {path:'\MyTransactions',component:TransacListComponent},
  {path:'\MyDragProduct',component:DragComponent},
  {path:'\ConvertProduct',component:ConvertProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
