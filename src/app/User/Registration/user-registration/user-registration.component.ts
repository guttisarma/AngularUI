import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  person:Person=new Person();
  uniqueID:string='uniqueID';
  AddressType:string='AddressType';
  UserList:string='UserList';
  constructor() { }

  ngOnInit() {
  }

}
export class Person
{
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