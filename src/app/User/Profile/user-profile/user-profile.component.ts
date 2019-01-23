import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }
  uniqueID:string='uniqueID';
  AddressType:string='AddressType';
  UserList:string='UserList';
  phonumber:string;
  emailId:string;
  person:exUser=new  exUser();
  phone:exPhone[]=[];
  email:exEmail[]=[];
  address:exAddress[]=[];
  ngOnInit() {
  }

  addPhone(){
    if(exPhone.isvalidphonenumber(this.phonumber))
    this.phone.push(new exPhone(this.phonumber,true))
    console.log('array length:'+this.phone.length);
  }
  addEmail(){
    this.email.push({'strEmailId':this.emailId,'bIsActive':true})
    console.log('array length:'+this.email.length);

  }

}

export class exUser
{
  constructor(){}
  strFirstName: string;
  strMiddleName: string;
  strLastName: string;
  dtDateOfBirth: string;
  strUniqueNumber: string;
}
export class exAddress
{
  strAddress1: string;
  strAddress2: string;
  strAddress3: string; 
  strCity:String;
  strState:string;
  strCountry:String;
}
export class exPhone
{
  //constructor(){}
  constructor(phnumber:string,isActive:boolean){
    this.strPhoneNumber=phnumber;
    this.bIsActive=isActive;
  }
  strPhoneNumber: string;
  bIsActive:boolean;
public static isvalidphonenumber(number:string)  {
    if(number.length>1 && number.length<12){
      if(number.startsWith('9')||number.startsWith('8') ||number.startsWith('7')||number.startsWith('6')){
        return true;
      }
    }
  return false;
}
}
export class exEmail
{
  strEmailId: string;
  bIsActive:boolean;
}