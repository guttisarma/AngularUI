import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http/'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req, next) {
    let tokenizedReq: any;
    if (sessionStorage.getItem("AuthToken") != undefined|| sessionStorage.getItem("AuthToken") != null) {
      tokenizedReq = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + sessionStorage.getItem("AuthToken")
        }
      })
    }
    else{
    return next.handle(req);
    }
    return next.handle(tokenizedReq);
   
  }
}
