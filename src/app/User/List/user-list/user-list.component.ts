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
  pageSize: number = 10;
  selectedOption: UserView;
  //UserAction:UserView;
  ngOnInit() {
    this.pageNumber = 1;
    this.buttonlable = "Change View";
    console.log('ngOnInit() is called');
    //this.GetDummyUsersDetails();
    this.selectedOption = UserView.All;
    this.userservice.getUserList(UserView.All,this.pageNumber).subscribe(lsper => {
      this.lsperson = lsper;
      console.log('Total records' + this.lsperson.length);
      this.lsperson.forEach(element => {
        console.log("FirstName "+element.strFirstName + ' CreatingDate ' +element.strCreatedOn+ ' Dod ' + element.strDob);
      });
    } );
  }
  private GetDummyUsersDetails() {
    //For debugging issue
    let R1: RegUser = new RegUser();
    R1.Email = 'Sarama@gmail.com';
    R1.PhoneNumber = '0940530322';
    R1.strFirstName = 'Samdde';
    R1.strLastName = "Gutti";
    R1.strDob = '09/7/2019';
    this.lsperson = [];
    this.lsperson.push(R1);
    this.lsperson.push(R1);
    this.lsperson.push(R1);
    this.lsperson.push(R1);
    this.lsperson.push(R1);
    this.lsperson.push(R1);
    this.lsperson.push(R1);
    this.lsperson.push(R1);
    this.lsperson.push(R1);
  }

  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }
  ChangePageNumber() {
    console.log('page is changed :' + this.pageNumber)
    console.log("Selected option is " + this.selectedOption.valueOf())
    this.GetUsersDetails(this.selectedOption);

  }
  pageChange(event: any) {
  }
  searchWithkey() {
    console.log(this.searchNameCode);
    this.lsperson = [];
    this.userservice.SearchNameCodeUser().subscribe(lsper => this.lsperson = lsper);
  }
  pendingusers() {
    this.lsperson = [];
    this.pageNumber=1;
    this.buttonlable = "Pending Approval";
    console.log('pendingusers() is called');
    this.selectedOption = UserView.PendingApproval;
    this.GetUsersDetails(this.selectedOption);
  }
  private GetUsersDetails(selectOp: UserView) {
    console.log("Selected option is " + selectOp.valueOf())
    this.userservice.getUserList(selectOp, this.pageNumber).subscribe(lsper => {
      this.lsperson = lsper;
      console.log('Total records' + this.lsperson.length);
    });
  }
  NextPageNumber(){
    this.pageNumber+=1;
    console.log('page is changed :' + this.pageNumber)
    this.GetUsersDetails(this.selectedOption);
  }
  approvedusers() {
    this.lsperson = [];
    this.buttonlable = "Approved";
    this.pageNumber=1;
    this.selectedOption = UserView.Approaved;
    this.GetUsersDetails(this.selectedOption);
  }
  managerusers() {
    this.lsperson = [];
    this.buttonlable = "Managers Only";
    this.pageNumber=1;
    this.selectedOption = UserView.ManagersOnly;
    this.GetUsersDetails(this.selectedOption);
  }
  activeusers() {
    this.lsperson = [];
    this.buttonlable = "Active Users";
    this.pageNumber=1;
    this.selectedOption = UserView.ActiveUsers;
    this.GetUsersDetails(this.selectedOption);
  }
  inactiveusers() {
    this.lsperson = [];
    this.buttonlable = "In Active Users";
    this.pageNumber=1;
    this.selectedOption = UserView.InActiveUsers;
    this.GetUsersDetails(this.selectedOption);
  }
}
