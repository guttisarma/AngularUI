import { Component, OnInit } from '@angular/core';
import { RegUser, AddrssUser } from '../../../HelperTs/User';
import { UserServiceService } from '../../../Service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-restration-v1',
  templateUrl: './user-restration-v1.component.html',
  styleUrls: ['./user-restration-v1.component.css']
})
export class UserRestrationV1Component implements OnInit {

  constructor(private userservice: UserServiceService, private router: Router) { }

  person: RegUser = new RegUser();
  address: AddrssUser = new AddrssUser();
  checkCommAdd: boolean;

  ngOnInit() {
    this.checkCommAdd = true;
  }
  onSubmit() {
    this.person.lsAddrssUser = [];
    this.person.lsAddrssUser.push(this.address);
    this.person.PhoneNumber = this.address.strPhone;
    this.person.Email = this.address.strEmail;
    console.log(this.person.PhoneNumber);
    console.log(this.person.Email);
    console.log(this.person.strFirstName);
    console.log(this.person.strLastName);
    this.person.strDob = JSON.stringify(this.person.strDob);
    console.log(this.person.strDob.toString());
    console.log(this.person.bGender);
    console.log(this.person.lsAddrssUser[0].strEmail);
    console.log(this.person.lsAddrssUser[0].strPhone);
    this.userservice.Register(this.person).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl('/');
      alert('User Created Successfully .Please Reset the password');
    }
    );

  }

}
