import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../Service/user-service.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    console.log('i am logging out');
    sessionStorage.setItem('AuthToken', null);
    sessionStorage.setItem('LoggedUserDetails', null);
    this.userService.UserMenu.next(false);
    console.log('i am logging out completed');
  }

}
