import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http/'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req, next) {
    let tokenizedReq: any;
    if (localStorage.getItem("AuthToken") != undefined|| localStorage.getItem("AuthToken") != null) {
      tokenizedReq = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + localStorage.getItem("AuthToken")
        }
      })
    }
    else{
    return next.handle(req);
    }
    return next.handle(tokenizedReq);
   
  }
}
