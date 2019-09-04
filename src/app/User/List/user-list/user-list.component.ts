import { Component, OnInit } from '@angular/core';
import { RegUser, UserView } from 'src/app/HelperTs/User';
import { UserServiceService } from '../../../Service/user-service.service';
import { MultiOption } from '../../../HelperTs/MultiOption'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userservice: UserServiceService) { }
  lsperson: RegUser[];
  searchNameCode: string;
  buttonlable: string;
  //UserAction:UserView;
  ngOnInit() {
    this.buttonlable = "Change View";
    console.log('ngOnInit() is called');
    this.userservice.getUserList(UserView.All).subscribe(lsper => this.lsperson = lsper);
  }
  searchWithkey() {
    console.log(this.searchNameCode);
    this.lsperson=[];
    this.userservice.SearchNameCodeUser().subscribe(lsper => this.lsperson = lsper);
  }
  pendingusers() {
    this.lsperson=[];
    this.buttonlable ="Pending Approval";
    console.log('pendingusers() is called');
    this.userservice.getUserList(UserView.PendingApproval).subscribe(lsper => this.lsperson = lsper);
  }
  approvedusers() {
    this.lsperson=[];
    this.buttonlable ="Approved";
    this.userservice.getUserList(UserView.Approaved).subscribe(lsper => this.lsperson = lsper);
  }
  managerusers() {
    this.lsperson=[];
    this.buttonlable ="Managers Only";
    this.userservice.getUserList(UserView.ManagersOnly).subscribe(lsper => this.lsperson = lsper);
  }
  activeusers() {
    this.lsperson=[];
    this.buttonlable ="Active Users";
    this.userservice.getUserList(UserView.ActiveUsers).subscribe(lsper => this.lsperson = lsper);
  }
  inactiveusers() {
    this.lsperson=[];
    this.buttonlable ="In Active Users";
    this.userservice.getUserList(UserView.InActiveUsers).subscribe(lsper => this.lsperson = lsper);
  }

}
