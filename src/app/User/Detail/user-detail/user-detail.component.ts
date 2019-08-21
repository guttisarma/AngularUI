import { Component, OnInit } from '@angular/core';
import {RegUser} from '../../../HelperTs/User';
import {UserServiceService} from '../../../Service/user-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userservice: UserServiceService) { }
  userSelection: number=0;
  userDetails: RegUser;
  ngOnInit() {
    this.userDetails=new RegUser();
    this.userservice.getexUser().subscribe(user=>{
      this.userDetails=user;
      console.log(this.userDetails);
    });

  }
  changeDetail(input:number){
    console.log(input);
    this.userSelection=input;
  }

}
