import { Injectable } from '@angular/core';
import {MockTransactionList,Transaction} from 'src/app/HelperTs/Transactions'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TransacService {

  private inlineTranscatGetPendingUrl = 'api/InlineTranscat/GetPending';  
  private inlineTranscatGetCompleteUrl = 'api/InlineTranscat/GetComplete'; 
      //Environment variable
      baseURL:String=environment.apiBaseUrl; 
  constructor(private http: HttpClient) { }

  getMockTransactionList():Observable<Transaction[]>{
    return of( MockTransactionList);
  }
  public InlineTranscatPending():Observable<Transaction[]>  {
        return this.http.get<Transaction[]>(this.inlineTranscatGetPendingUrl);
    }
    public InlineTranscatComplete():Observable<Transaction[]>  {
      return this.http.get<Transaction[]>(this.inlineTranscatGetCompleteUrl);
  }

}
