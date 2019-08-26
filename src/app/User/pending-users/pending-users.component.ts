import { Component, OnInit } from '@angular/core';
import { RegUser, AddrssUser } from '../../HelperTs/User';
import { UserServiceService } from '../../Service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending-users',
  templateUrl: './pending-users.component.html',
  styleUrls: ['./pending-users.component.css']
})
export class PendingUsersComponent implements OnInit {

  constructor(private userserviceservice: UserServiceService, private router: Router) { }
  person: RegUser[] = [];

  ngOnInit() {

    /* let p=new RegUser();
    p.strFirstName="jagadeesh";
    p.strDob="2019-09-08";
    p.UserCode="SSN2348H";
    p.PhoneNumber="943843492";
    this.person.push(p);
    let p1=new RegUser();
    p1.strFirstName="Sharma";
    p1.strDob="2019-01-08";
    p1.UserCode="I090IOK";
    p1.PhoneNumber="90988492";
    this.person.push(p1);
    let p2=new RegUser();
    p2.strFirstName="Sai";
    p2.strDob="2019-09-08";
    p2.UserCode="UOMHU890";
    p2.PhoneNumber="89088492";
    this.person.push(p2); */
    this.userserviceservice.GetUnApprovedUsers().subscribe(per => this.person = per);
  }
  ApproveUser(person: RegUser) {
    this.userserviceservice.ApproveUser(person).subscribe(
      x => this.userserviceservice.GetUnApprovedUsers().subscribe(per => this.person = per));
  }
  CreateNewUser() {
    this.router.navigateByUrl('/UserRegister');
  }
}
