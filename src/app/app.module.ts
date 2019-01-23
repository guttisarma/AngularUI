import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {MatNativeDateModule} from '@angular/material';
//import {HttpClientModule} from '@angular/common/http';
import { MultiOptionComponent } from './multi-option/multi-option.component';
import { UserRegistrationComponent } from './User/Registration/user-registration/user-registration.component';
import { UserProfileComponent } from './User/Profile/user-profile/user-profile.component';
import { UserListComponent } from './User/List/user-list/user-list.component';
import { UserDetailComponent } from './User/Detail/user-detail/user-detail.component';
import { ProductRegistrationComponent } from './Product/product-registration/product-registration.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { AssignProductComponent } from './Product/assign-product/assign-product.component';
import { ConvertProductComponent } from './Product/convert-product/convert-product.component';
import { HttpClientModule }    from '@angular/common/http';
import { TransacListComponent } from './Transaction/transac-list/transac-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MultiOptionComponent,
    UserRegistrationComponent,
    UserProfileComponent,
    UserListComponent,
    UserDetailComponent,
    ProductRegistrationComponent,
    ProductListComponent,
    ProductDetailComponent,
    AssignProductComponent,
    ConvertProductComponent,
    TransacListComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    //MatNativeDateModule,
    //ReactiveFormsModule,
    //MatDatepickerModule,        // <----- import(must)
    //MatNativeDateModule,        // <----- import for date formating(optional)
    //MatMomentDateModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
