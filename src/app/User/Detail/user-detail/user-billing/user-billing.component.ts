import { Component, OnInit } from '@angular/core';
import { BillingDetails } from '../../../../HelperTs/Transactions'
import { UserServiceService } from '../../../../Service/user-service.service';

@Component({
  selector: 'app-user-billing',
  templateUrl: './user-billing.component.html',
  styleUrls: ['./user-billing.component.css']
})
export class UserBillingComponent implements OnInit {

  constructor(private userservice: UserServiceService) { }
  billingdetails: BillingDetails = new BillingDetails();
  ManagerUserCode: string;
  ngOnInit() {
  }
  Submit() {
    this.userservice.UpdateBillingValues(this.billingdetails).subscribe(x => console.log(x));
  }
  managerJoinCode() {
    this.userservice.JoinUnderGiveUser(this.ManagerUserCode).subscribe();
  }
}
