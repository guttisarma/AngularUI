import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http/'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req,next){
    let tokenizedReq:any;
if(localStorage.getItem("AuthToken")!=undefined){
tokenizedReq=req.clone({
  setHeaders:{
    Authorization:'Bearer '+localStorage.getItem("AuthToken")
  }
})
}
else{
  tokenizedReq=req.clone({
    setHeaders:{
      skiptokenvalidation:localStorage.getItem("skipTokenAuth")
    }
  })
}
return next.handle(tokenizedReq);
if(localStorage.getItem("AuthToken")!=undefined)
return next.handle(tokenizedReq);
else
return next.handle();
  }
}
