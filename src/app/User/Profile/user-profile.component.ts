import { Component, OnInit } from '@angular/core';
import {UserServiceService} from 'src/app/Service/user-service.service';
import {User,MockUserList,exAddress,exEmail,exPhone,exUser,MockexAddress, MockexEmail,MockexPhone,MockexUser} from 'src/app/HelperTs/User'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private userService:UserServiceService) { }
  uniqueID:string='uniqueID';
  AddressType:string='AddressType';
  UserList:string='UserList';
  phonumber:string;
  emailId:string;
  address1:string;
  address2:string;
  address3:string;
  city:string;
  state:string;
  Country:string;
  seletedOption:string;
  person:exUser=new  exUser();
  lsphone:exPhone[]=[];
  lsemail:exEmail[]=[];
  lsaddress:exAddress[]=[];
  activePhoneNumber:exPhone;
  activeEmailId:exEmail;
  ngOnInit() {
    this.getexUser();
    this.getexPhone();
    this.getexAddress();
    this.getexEmail();
  }


  onSelectionChanged(selection:string){
    var i:number=0
    for(i=0;i<this.lsaddress.length;++i){
    if(selection==this.lsaddress[i].AddressType){
        this.address1=this.lsaddress[i].strAddress1
        this.address2=this.lsaddress[i].strAddress2
        this.address3=this.lsaddress[i].strAddress3+', '+this.lsaddress[i].strCity+
                                                  ', '+this.lsaddress[i].strState+
                                                  ', '+this.lsaddress[i].strCountry;
    }
    }
  }

  getexUser(){
    this.userService.getexUser().subscribe(data=>this.person=data);
  }
  getexPhone(){
    this.userService.getexPhone().subscribe(data=>this.activePhoneNumber=data);
  }
  getexEmail(){
    this.userService.getexEmail().subscribe(data=>this.activeEmailId=data);
  }
  getexAddress(){
    this.userService.getexAddress().subscribe(data=>this.lsaddress.push(data));
  
  }

  addPhone(){
    if(exPhone.isvalidphonenumber(this.phonumber))
    this.lsphone.push(new exPhone(this.phonumber,true))
    console.log('array length:'+this.lsphone.length);
  }
  addEmail(){
    this.lsemail.push({'strEmailId':this.emailId,'bIsActive':true})
    console.log('array length:'+this.lsemail.length);

  }

}
