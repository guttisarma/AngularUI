import { Component, OnInit } from '@angular/core';
import { RegUser } from 'src/app/HelperTs/User';
import { UserServiceService } from '../../../Service/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userservice: UserServiceService) { }
  lsperson: RegUser[];
  ngOnInit() {

    this.userservice.getUserList().subscribe(lsper => this.lsperson = lsper);
  }

}
