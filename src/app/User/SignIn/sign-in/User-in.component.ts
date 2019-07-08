import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {UserServiceService} from 'src/app/Service/user-service.service';
import {UserIn} from 'src/app/HelperTs/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-in',
  templateUrl: './user-in.component.html',
  styleUrls: ['./user-in.component.css']
})
export class UserInComponent implements OnInit {

  constructor(private UserServ:UserServiceService,private router:Router) { }
  SingIn:UserIn=new UserIn();
  baseURL:String=environment.apiBaseUrl;
  tokenInfo:string;
  ngOnInit() {
    
  }
  onLogin()  {
    this.UserServ.login(this.SingIn).subscribe(token=>{
      if(token=="LoginFailed"){
        alert("Username/Password went wrong");
      }
     else if(token!=undefined && token.length>20){
      this.router.navigateByUrl('/');
      this.UserServ.VisibleUserOp(true);
     }
      else{
        alert("Username/Password went wrong");
      }
    },error=>alert(error));
    
  }

}
