import { Injectable } from '@angular/core';
import {MockTransactionList,Transaction} from 'src/app/HelperTs/Transactions'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacService {

  constructor() { }

  getMockTransactionList():Observable<Transaction[]>{
    return of( MockTransactionList);
  }
}
