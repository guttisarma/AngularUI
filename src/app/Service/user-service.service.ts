import { Injectable } from '@angular/core';
import { User, exAddress, exEmail, exPhone, exUser, MockexAddress, MockexEmail, MockexPhone, MockexUser } from '../HelperTs/User';
import { Observable, of, BehaviorSubject, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserIn } from '../../app/HelperTs/User';
import { RegUser, AddrssUser,UserView } from '../HelperTs/User';
import { BillingDetails } from '../HelperTs/Transactions';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private UserMenu = new BehaviorSubject<boolean>(false);
  cast = this.UserMenu.asObservable();
  // Environment variable
  baseURL: String = environment.apiBaseUrl;

  checkUserExists(LoginRequest: UserIn): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(this.baseURL + '/unauthenticuser/IsUserExists', LoginRequest, httpOptions).pipe(
      tap((UserId: number) => {
        return UserId;
      }),
      catchError(this.handleError<number>('addHero'))
    );
  }
  ApproveUser(person: RegUser) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.baseURL + '/User/ApproveUser', person, httpOptions);

  }
  doreset(LoginRequest: UserIn): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(this.baseURL + '/unauthenticuser/ResetPassword', LoginRequest, httpOptions).pipe(
      tap((isReset: boolean) => {
        return isReset;
      }),
      catchError(this.handleError<boolean>('addHero'))
    );
  }

  VisibleUserOp(isvisible) {
    this.UserMenu.next(isvisible);
  }
  JoinUnderGiveUser(UserCode:string){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(UserCode);
    return this.http.post(this.baseURL + '/User/JointoGivenUser/'+ UserCode, httpOptions).pipe(
      tap((isReset: boolean) => {
        return isReset;
      }),
      catchError(this.handleError<boolean>('addHero'))
    );

  }
  getUserList(Response:UserView): Observable<RegUser[]> {
    console.log(Response.valueOf());
    return this.http.get<RegUser[]>(this.baseURL + '/User/GetUserList/'+Response.valueOf());
  }
  SearchNameCodeUser(): Observable<RegUser[]> {
    return this.http.get<RegUser[]>(this.baseURL + '/User/SearchNameCodeUser');
  }
  constructor(private http: HttpClient) { }
  getMyUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + '/User/UsersUndertaken');
  }
  AddPhoneNo(address: AddrssUser): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(this.baseURL + '/User/AddPhone', address, httpOptions).pipe(
      tap((isReset: boolean) => {
        return isReset;
      }),
      catchError(this.handleError<boolean>('addHero'))
    );

  }
  UpdateBillingValues(billingdetail: BillingDetails): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(billingdetail);
    return this.http.post(this.baseURL + '/User/AddBillingDetails', billingdetail, httpOptions).pipe(
      tap((isReset: boolean) => {
        return isReset;
      }),
      catchError(this.handleError<boolean>('addHero'))
    );

  }

  AddEmail(address: AddrssUser): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(this.baseURL + '/User/AddEmail', address, httpOptions).pipe(
      tap((isReset: boolean) => {
        return isReset;
      }),
      catchError(this.handleError<boolean>('addHero'))
    );

  }

  AddAddress(address: AddrssUser): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(this.baseURL + '/User/AddAddress', address, httpOptions).pipe(
      tap((isReset: boolean) => {
        return isReset;
      }),
      catchError(this.handleError<boolean>('addHero'))
    );

  }
  /* getUserbyCode(SearUserCode:string):Observable<User>{
    return of(MockUserList[3]);
  } */
  getexUser(): Observable<RegUser> {
    return this.http.get<RegUser>(this.baseURL + '/User/GetUserDetail');
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

    return this.http.post(this.baseURL + '/UnAuthenticUser/Authenticate', LoginRequest, httpOptions).pipe(
      tap(
        (JWT: string) => {
          localStorage.setItem('AuthToken', JWT);
          console.log(JWT);
        }),
      catchError(this.handleError<string>('login', 'LoginFailed'))
    );
  }

  GetUnApprovedUsers(): Observable<RegUser[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.get<RegUser[]>(this.baseURL + '/User/GetUnApprovedUsers');
  }
  UpdateProfilePic(selectedFile: File): Observable<string> {
    const uploadData = new FormData();
    uploadData.append('myFile', selectedFile, selectedFile.name);
    return this.http.post(this.baseURL + '/User/UpdateProfilePic', uploadData).pipe(
      tap(
        (Response: string) => {
			console.log('Response :'+Response);
			console.log(Response);
			let url:string;
			url='\\AngularUI\\assets\\UserImage\\Hydrangeas_ebe922dd-39ff-4bb6-8b70-cb4ac78.jpg';
			console.log(url);
			console.log('I am returning string');
          return url;
        }),
      catchError(this.handleError<string>('false', "Some Error")));
  }

  Register(regUser: RegUser): Observable<RegUser> {
    console.log('Register will call server method');
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let ruser = new RegUser();
    return this.http.post(this.baseURL + '/unauthenticuser/Registration', regUser, httpOptions).pipe(
      tap(
        (regUserResult: RegUser) => { return regUserResult; }),
      catchError(this.handleError<RegUser>('Register', ruser)));

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
