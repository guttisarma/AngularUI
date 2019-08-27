import { Injectable } from '@angular/core';
import { MultiOption, MockMultiOptionuniqueID, MockMultiOptionAddressType } from '../HelperTs/MultiOption';
import { MockMultiOptionUserList, MockProductOption } from '../HelperTs/MultiOption';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MultiOptionService {

  constructor() { }

  // Environment variables
  baseURL: String = environment.apiBaseUrl;

  public getMockMultiOption(category: string): Observable<MultiOption[]> {
    if (category === 'uniqueID') {
      return of(MockMultiOptionuniqueID);
    }
    if (category === 'AddressType') {
      return of(MockMultiOptionAddressType);

    }
    if (category === 'UserList') {
      return of(MockMultiOptionUserList);
    }
    if (category === 'ProOperations') {
      return of(MockProductOption);

    }
  }
}
