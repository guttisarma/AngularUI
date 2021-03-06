import { Component, OnInit } from '@angular/core';
import {AddrssUser } from '../../../../HelperTs/User';
import {UserServiceService} from '../../../../Service/user-service.service';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {

  constructor(private userservice: UserServiceService) { }
  addressUser: AddrssUser = new AddrssUser();
  AddressType:string='AddressType';
  ngOnInit() {
  }
  AddAddrees(){
    console.log(AddrssUser);
    this.userservice.AddAddress(this.addressUser).subscribe(x=>{console.log(x);
      alert("Added your Address");
      this.addressUser.strAddress1='';
      this.addressUser.strAddress2='';
      this.addressUser.strAddress3='';
    });
  }
  AddPhone(){
    console.log(AddrssUser);
    this.userservice.AddPhoneNo(this.addressUser).subscribe(x=>{console.log(x);
      alert("Added your Phone Number");
      this.addressUser.strPhone='';    
    });
  }
  AddEmail(){
    console.log(AddrssUser);
    this.userservice.AddEmail(this.addressUser).subscribe(x=>{console.log(x);
      alert("Added your email");
      this.addressUser.strEmail='';    
    }
      );
  }
}
