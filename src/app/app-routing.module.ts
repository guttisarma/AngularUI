import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiOptionComponent } from './multi-option/multi-option.component';
import { UserRegistrationComponent } from './User/Registration/user-registration/user-registration.component';
import { UserProfileComponent } from './User/Profile/user-profile.component';
import { UserListComponent } from './User/List/user-list/user-list.component';
import { UserDetailComponent } from './User/Detail/user-detail/user-detail.component';
import { TransacListComponent } from './Transaction/transac-list/transac-list.component';
import { UserInComponent } from './User/SignIn/sign-in/User-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgetPasswordComponent } from './User/SignIn/forget-password/forget-password.component';

const routes: Routes = [
  { path: 'UserRegister', component: UserRegistrationComponent },
  { path: 'UserProfile', component: UserProfileComponent },
  { path: 'UserList', component: UserListComponent },
  { path: 'UserDetail', component: UserDetailComponent,canDeactivate:['checkFormDirty'] },
  { path: 'SignIn', component: UserInComponent },
  { path: 'ForgetPassword', component: ForgetPasswordComponent },
  { path: 'MyTransactions', component: TransacListComponent },

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
