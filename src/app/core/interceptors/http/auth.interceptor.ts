import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifiedRequest = request.clone({
      headers: request.headers
        .set('Authorization', `${environment.API_TOKEN}`)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
    });

    return next.handle(modifiedRequest);
  }
}