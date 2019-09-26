import { Component, OnInit } from '@angular/core';
import { RegUser, UserView } from 'src/app/HelperTs/User';
import { UserServiceService } from '../../../Service/user-service.service';
import { MultiOption } from '../../../HelperTs/MultiOption'
import { element } from '@angular/core/src/render3';

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
  pageNumber: number;
  //UserAction:UserView;
  ngOnInit() {
    this.pageNumber=1;
    this.buttonlable = "Change View";
    console.log('ngOnInit() is called');
   let R1: RegUser = new RegUser();
   R1.Email='Sarama@gmail.com';
   R1.PhoneNumber='0940530322';
   R1.strFirstName='Samdde';
   R1.strLastName="Gutti";
   R1.strDob='09/7/2019';
   this.lsperson=[];
   this.lsperson.push(R1);
   this.lsperson.push(R1);
   this.lsperson.push(R1);
   this.lsperson.push(R1);
   this.lsperson.push(R1);
   this.lsperson.push(R1);
   this.lsperson.push(R1);
   this.lsperson.push(R1);
   this.lsperson.push(R1);

    /*  this.userservice.getUserList(UserView.All,this.pageNumber).subscribe(lsper => {
       this.lsperson = lsper;
       console.log('Total records' + this.lsperson.length);
       this.lsperson.forEach(element => {
         console.log("FirstName "+element.strFirstName + ' CreatingDate ' +element.strCreatedOn+ ' Dod ' + element.strDob);
       });
     } ); */
  }
  searchWithkey() {
    console.log(this.searchNameCode);
    this.lsperson = [];
    this.userservice.SearchNameCodeUser().subscribe(lsper => this.lsperson = lsper);
  }
  pendingusers() {
    this.lsperson = [];
    this.buttonlable = "Pending Approval";
    console.log('pendingusers() is called');
    this.userservice.getUserList(UserView.PendingApproval,this.pageNumber).subscribe(lsper => {
    this.lsperson = lsper;
      console.log('Total records' + this.lsperson.length);
    });
  }
  approvedusers() {
    this.lsperson = [];
    this.buttonlable = "Approved";
    this.userservice.getUserList(UserView.Approaved,this.pageNumber).subscribe(lsper => {
    this.lsperson = lsper;
      console.log('Total records' + this.lsperson.length);
    });
  }
  managerusers() {
    this.lsperson = [];
    this.buttonlable = "Managers Only";
    this.userservice.getUserList(UserView.ManagersOnly,this.pageNumber).subscribe(lsper => {
    this.lsperson = lsper;
      console.log('Total records' + this.lsperson.length);
    });
  }
  activeusers() {
    this.lsperson = [];
    this.buttonlable = "Active Users";
    this.userservice.getUserList(UserView.ActiveUsers,this.pageNumber).subscribe(lsper => {
    this.lsperson = lsper;
      console.log('Total records' + this.lsperson.length);
    });
  }
  inactiveusers() {
    this.lsperson = [];
    this.buttonlable = "In Active Users";
    this.userservice.getUserList(UserView.InActiveUsers,this.pageNumber).subscribe(lsper => {
    this.lsperson = lsper;
      console.log('Total records' + this.lsperson.length);
    });
  }

}
