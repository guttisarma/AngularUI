import { Injectable } from '@angular/core';
import { User, exAddress, exEmail, exPhone, exUser, MockexAddress, MockexEmail, MockexPhone, MockexUser } from '../HelperTs/User'
import { Observable, of,BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserIn } from '../../app/HelperTs/User';
import { RegUser, AddrssUser } from '../HelperTs/User';
//import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private UserMenu=new BehaviorSubject<boolean>(false);
  cast=this.UserMenu.asObservable();

  checkUserExists(LoginRequest: UserIn): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post('http://localhost:55374/api//User/IsUserExists', LoginRequest, httpOptions).pipe(
      tap((UserId: number) => {
        return UserId
      }),
      catchError(this.handleError<number>('addHero'))
    );
  }
  doreset(LoginRequest: UserIn): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post('http://localhost:55374/api//User/ResetPassword', LoginRequest, httpOptions).pipe(
      tap((isReset: boolean) => {
        return isReset;
      }),
      catchError(this.handleError<boolean>('addHero'))
    );
  }

  VisibleUserOp(isvisible){
    this.UserMenu.next(isvisible);
  }
  //Environment variable
  baseURL: String = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
  getMyUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + '/User/UsersUndertaken');
  }

  /* getUserbyCode(SearUserCode:string):Observable<User>{
    return of(MockUserList[3]);
  } */
  getexUser(): Observable<exUser> {
    return of(MockexUser);
  }
  getexAddress(): Observable<exAddress> {
    return of(MockexAddress);
  }
  getexEmail(): Observable<exEmail> {
    return of(MockexEmail);
  }
  getexPhone(): Observable<exPhone> {
    return of(MockexPhone);
  }
  login(LoginRequest: UserIn): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post('http://localhost:55374/api/User/Authenticate', LoginRequest, httpOptions).pipe(
      tap(
        (JWT: string) => {        localStorage.setItem("AuthToken", JWT);
        console.log(JWT);
        
      }),
      catchError(this.handleError<string>('login','LoginFailed'))
    );
  }
  

  Register(regUser: RegUser): Observable<RegUser> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    try {
      this.http.post('http://localhost:55374/api//User/Registration', regUser, httpOptions).pipe(tap(
        (regUserResult: RegUser) => { return regUserResult; }), catchError(this.handleError<string>('')))
    } catch (ex) {
      console.log(ex);
      return null;
    }


  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {

  }

  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /* private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }; */
}
