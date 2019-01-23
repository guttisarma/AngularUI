import { Injectable } from '@angular/core';
import {MultiOption,MockMultiOptionuniqueID,MockMultiOptionAddressType,MockMultiOptionUserList} from '../HelperTs/MultiOption';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MultiOptionService {

  constructor() { }

  public getMockMultiOption(category:string):Observable<MultiOption[]>
  {
    if(category=='uniqueID')
    return of(MockMultiOptionuniqueID);
    if(category=='AddressType')
    return of(MockMultiOptionAddressType);
    if(category=='UserList')
    return of(MockMultiOptionUserList);
  }
}
