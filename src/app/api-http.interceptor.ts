import { Injectable } from  "@angular/core";
import { HttpInterceptor, HttpRequest,HttpHandler,HttpEvent ,HttpResponse, HttpErrorResponse } from  "@angular/common/http";
import { Observable,pipe} from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router} from '@angular/router'

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor
{
    jwtToken : String = "";
    constructor(private router : Router) { }
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.jwtToken != "") {
            req = req.clone({ setHeaders: { Authorization: `Bearer ${this.jwtToken}` }});
        }
        
        return next.handle(req).pipe(tap(
                (evt : HttpEvent<any>) => {
                    if (evt instanceof HttpResponse) {

                        let tab : Array<String> ;   
                        let enteteAuthorization = evt.headers.get("Authorization");
                        if (enteteAuthorization != null ) {
                            tab = enteteAuthorization.split(/Bearer\s+(.*)$/i);
                            if (tab.length > 1) {
                                this.jwtToken = tab [1]; }
                            }
   
                    }
                }, ( error : HttpErrorResponse ) =>  {
                    switch (error.status) {
                        case 401 :
                            this.router.navigate (['/login']);
                            break;
                        default : 
                            console.log ("ERROR !!!!!") 
                    }
                    } 
                ) )
 }   
}