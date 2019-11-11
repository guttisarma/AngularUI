import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { UserIn } from 'src/app/HelperTs/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private UserServ: UserServiceService, private router: Router) { }
  SingIn: UserIn;
  password: string;
  repassword: string;
  baseURL: String = environment.apiBaseUrl;
  tokenInfo: string;
  username: string;
  isvalidusercheck: boolean = false;

  ngOnInit() {
  }
  onReset() {
    if (this.password === this.repassword) {
      this.SingIn.Password = this.password;
      sessionStorage['skipTokenAuth'] = true;
      this.UserServ.doreset(this.SingIn).subscribe(issuccess => {
        if (issuccess) {
          this.router.navigateByUrl('/SignIn');
        }
      });
    }
  }

  onCheckUserExists() {
    this.SingIn = new UserIn();
    this.SingIn.Username = this.username;
    sessionStorage['skipTokenAuth'] = true;
    this.UserServ.checkUserExists(this.SingIn).subscribe(UserId => {
      if (UserId !== 0) {
        this.SingIn.UserId = UserId;
        this.isvalidusercheck = true;
        console.log('UserId is');
        console.log('UserId is' + UserId);
      }
    }
    );

  }
}
