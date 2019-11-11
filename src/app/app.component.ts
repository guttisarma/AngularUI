import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment.PreProd';
import { UserServiceService } from './Service/user-service.service';
import { Router } from '@angular/router';
import { RegUser } from './HelperTs/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularUI';
  person: Person = new Person();
  uniqueID: string = 'uniqueID';
  AddressType: string = 'AddressType';
  UserList: string = 'UserList';
  // NewUser person=new NewUser();
  closeResult: string;
  selectedEnv: string = environment.name;
  IsUserLogIn: boolean = false;
  regUser: RegUser;
  // private subscription:Subscription;
  constructor(private userService: UserServiceService, private router: Router) {

  }

  ngOnInit() {
    if (sessionStorage.getItem('AuthToken') != undefined || sessionStorage.getItem('AuthToken') != null) {
      this.IsUserLogIn = true;
    } else {
      this.IsUserLogIn = false;
    }
    console.log(this.IsUserLogIn);
    this.regUser = new RegUser();
    this.userService.cast.subscribe(isauthenticate => {
      this.IsUserLogIn = isauthenticate;

      if (sessionStorage.getItem('LoggedUserDetails') != undefined && sessionStorage.getItem('LoggedUserDetails') != null) {
        console.log('It entered here');
        this.regUser = JSON.parse(sessionStorage.getItem('LoggedUserDetails'));
        this.IsUserLogIn = true;
        const navBarColor = document.getElementById('navbar_id');
        navBarColor.style.backgroundColor = '#360B66';
        const footerColor = document.getElementById('footer_id');
        footerColor.style.backgroundColor = '#360B66';
      }
    });
    /*  this.IsUserLogIn = true;
     console.log('this.IsUserLogIn ' + this.IsUserLogIn); */

  }


  logout() {
    sessionStorage.setItem('AuthToken', null);
    sessionStorage.setItem('LoggedUserDetails', null);
    this.IsUserLogIn = false;
    this.router.navigateByUrl('/SignIn');
    const navBarColor = document.getElementById('navbar_id');
        navBarColor.style.backgroundColor = '#999999';
        const footerColor = document.getElementById('footer_id');
        footerColor.style.backgroundColor = '#999999';
  }
  // person.startDate = new Date(1990, 0, 1);
}

export class Person {
  firstname: string;
  middlename: string;
  lastname: string;
  dateofbirth: string;
  uniquenumber: string;
  address1: string;
  address2: string;
  address3: string;
  phonenumber: string;
  emailid: string;
}
class NewUser {
  firstname: string;
  middlename: string;
  lastname: string;
  dateofbirth: string;
  uniquenumber: string;
  address1: string;
  address2: string;
  address3: string;
  phonenumber: string;
  emailid: string;
}
