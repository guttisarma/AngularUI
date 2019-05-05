import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
//import {HttpClientModule} from '@angular/common/http';
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
import { HttpClientModule ,HTTP_INTERCEPTORS}    from '@angular/common/http';
import { TransacListComponent } from './Transaction/transac-list/transac-list.component';
import { AdharFormatPipe } from './custompipes/adhar-format.pipe';
import { DragComponent } from './Product/Dragable_Product/drag/drag.component';
import { UserInComponent } from './User/SignIn/sign-in/User-in.component';
import { TokenInterceptorService } from './token-interceptor.service';



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
    TransacListComponent,
    AdharFormatPipe,
    DragComponent,
    UserInComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule
    //ReactiveFormsModule,
    //MatDatepickerModule,        // <----- import(must)
    //MatNativeDateModule,        // <----- import for date formating(optional)
    //MatMomentDateModule 
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
