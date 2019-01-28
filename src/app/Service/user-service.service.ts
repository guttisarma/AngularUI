import { Injectable } from '@angular/core';
import {User,MockUserList,exAddress,exEmail,exPhone,exUser,MockexAddress, MockexEmail,MockexPhone,MockexUser} from '../HelperTs/User'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  getUserbyCode(SearUserCode:string):Observable<User>{
    return of(MockUserList[3]);
  }
  getexUser():Observable<exUser>{
    return of(MockexUser);
  }
  getexAddress():Observable<exAddress>{
    return of(MockexAddress);
  }
  getexEmail():Observable<exEmail>{
    return of(MockexEmail);
  }
  getexPhone():Observable<exPhone>{
    return of(MockexPhone);
  }
}
