import { Injectable } from '@angular/core';
import {User,MockUserList} from '../HelperTs/User'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  getUserbyCode(SearUserCode:string):Observable<User>{
    return of(MockUserList[3])
  }
}
