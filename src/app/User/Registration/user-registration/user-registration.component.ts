import { Component, OnInit } from '@angular/core';
import {RegUser,AddrssUser} from '../../../HelperTs/User';
import {UserServiceService}from '../../../Service/user-service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  person:RegUser=new RegUser();
  uniqueID:string='uniqueID';
  AddressType:string='AddressType';
  addressUser:AddrssUser=new AddrssUser();
  constructor(private userservice:UserServiceService) { }

  ngOnInit() {
  this.person.lsAddrssUser=[];

  }
  onSubmit(){
    console.log('submit button clicked');
    this.person.lsAddrssUser.push(this.addressUser);
    console.log('submit button clicked');
    this.userservice.Register(this.person).subscribe((reg:RegUser)=>this.person=reg);
  }

}
// export class Person
// {
//   firstname: string;
//   middlename: string;
//   lastname: string;
//   dateofbirth: string;
//   uniquenumber: string;
//   address1: string;
//   address2: string;
//   address3: string;
//   phonenumber: string;
//   emailid: string; 
//}