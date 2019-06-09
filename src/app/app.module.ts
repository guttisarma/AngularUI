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

import { MultiOptionComponent } from './multi-option/multi-option.component';
import { UserRegistrationComponent } from './User/Registration/user-registration/user-registration.component';
import { UserProfileComponent } from './User/Profile/user-profile.component';
import { UserListComponent } from './User/List/user-list/user-list.component';
import { UserDetailComponent } from './User/Detail/user-detail/user-detail.component';

//import {ProductMgrComponent} from './Product/product-mgr/product-mgr.component';

import { HttpClientModule ,HTTP_INTERCEPTORS}    from '@angular/common/http';
import { TransacListComponent } from './Transaction/transac-list/transac-list.component';
//import { AdharFormatPipe } from './custompipes/adhar-format.pipe';
//import { DragComponent } from './Product/Dragable_Product/drag/drag.component';
import { UserInComponent } from './User/SignIn/sign-in/User-in.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AssignedProductListComponent } from './Product/AssignProduct/assigned-product-list/assigned-product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductModule } from './product/product.module';
import { ForgetPasswordComponent } from './User/SignIn/forget-password/forget-password.component';



@NgModule({
  declarations: [
    AppComponent,
    MultiOptionComponent,
    UserRegistrationComponent,
    UserProfileComponent,
    UserListComponent,
    UserDetailComponent,
    TransacListComponent,
   // AdharFormatPipe,
    //DragComponent,
    //ProductMgrComponent,
    UserInComponent,
    //AssignedProductListComponent,
    PageNotFoundComponent,
    ForgetPasswordComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule,
    //ProductRoutingModule,
    ProductModule,
    AppRoutingModule,
    //ReactiveFormsModule,
    //MatDatepickerModule,        // <----- import(must)
    //MatNativeDateModule,        // <----- import for date formating(optional)
    //MatMomentDateModule 
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
