import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from 'src/app/auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

//Retrieve accesstoken from local storage
const accessToken = localStorage.getItem("token");

//Check if accesToken exists, else send request without bearer token
if (accessToken) {
  const cloned = req.clone({
      headers: req.headers.set("Authorization",
          "Token " + accessToken)
  });

  console.log('Token added to HTTP request');
  return next.handle(cloned);
}
else {
  //No token; proceed request without bearer token
  console.log('No token added to HTTP request');
  return next.handle(req);
}
}
}







  //       // We inject a LoginService
  //       constructor(private loginService: AuthService) {}   
  //       intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {      
  //         console.log('INTERCEPTOR');
  //       // We retrieve the token, if any
  //       const token = this.loginService.getToken();
  //       let newHeaders = req.headers;
  //       if (token) {
  //          // If we have a token, we append it to our new headers
  //          newHeaders = newHeaders.append('authtoken', token);
  //       }
  //       // Finally we have to clone our request with our new headers
  //       // This is required because HttpRequests are immutable
  //       const authReq = req.clone({headers: newHeaders});      // Then we return an Observable that will run the request
  //       // or pass it to the next interceptor if any
  //       return next.handle(authReq);
  //    }
  // }

//   constructor(private injector : Injector) { }

//   intercept(req,next){
//     let authService = this.injector.get(AuthService)
//     let tokenizedReq = req.clone({setHeaders:
//       {
//       Authorization : `bearer ${authService.getToken()}`}   }
//        //   {
//       //   headers: req.headers.set('Authorization', 'Bearer ' + authService.getToken())
//       // }
//     )
//     return next.handle(tokenizedReq)
//   }

// }
