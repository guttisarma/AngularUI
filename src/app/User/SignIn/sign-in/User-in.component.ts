import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { UserIn } from 'src/app/HelperTs/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-in',
  templateUrl: './user-in.component.html',
  styleUrls: ['./user-in.component.css']
})
export class UserInComponent implements OnInit {

  constructor(private UserServ: UserServiceService, private router: Router) { }
  SingIn: UserIn = new UserIn();
  baseURL: String = environment.apiBaseUrl;
  tokenInfo: string;
  IsLoading: boolean;
  IsCreated: boolean = true;
  ngOnInit() {

  }
  onLogin() {
    this.IsLoading = true;
    this.UserServ.login(this.SingIn).subscribe(regUser => {
      if (regUser.token == "LoginFailed") {
        alert("Username/Password went wrong");
      }
      else if (regUser.token!= undefined && regUser.token.length > 20) {
        //here length> 20 for no reason can be correct later
        this.router.navigateByUrl('/');
        this.UserServ.VisibleUserOp(true);
      }
      else {
        alert("Username/Password went wrong");
      }
      this.IsLoading = false;
    }, error => alert(error));

  }
  create(){
    this.IsCreated=false;
    this.IsLoading=true;
  }
  ShowBack(){
    this.IsCreated=true;
    this.IsLoading=false;
  }

}
