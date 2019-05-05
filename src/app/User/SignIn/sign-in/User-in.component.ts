import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {UserServiceService} from 'src/app/Service/user-service.service';
import {UserIn} from 'src/app/HelperTs/User';

@Component({
  selector: 'app-user-in',
  templateUrl: './user-in.component.html',
  styleUrls: ['./user-in.component.css']
})
export class UserInComponent implements OnInit {

  constructor(private UserServ:UserServiceService) { }
  SingIn:UserIn=new UserIn();
  baseURL:String=environment.apiBaseUrl;
  ngOnInit() {
    
  }
  onLogin()  {
    alert(this.baseURL);
    this.UserServ.login(this.SingIn).subscribe(x=>alert(x));
  }

}
