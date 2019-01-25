import { Injectable } from '@angular/core';
import {User,MockUserList} from '../HelperTs/User'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private UsersUndertaken = 'api/User/UsersUndertaken'; 

  constructor(private http: HttpClient) { }
  getUserbyCode(SearUserCode:string):Observable<User>{
    return of(MockUserList[3])
  }
  getUnderUsers():Observable<User[]>{
    return this.http.get<User[]>(this.UsersUndertaken);
  }

}
