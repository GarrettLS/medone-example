import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { SnackBarService } from '../../services';

/**
 * Catches errors from HTTP requests.
 * Changes what is shown based on environment
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private snackBar: SnackBarService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            if (environment.production) {
              errorMsg = `Internal Server Error`;
            } else {
              errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            }
          }
          console.log(errorMsg);
          this.snackBar.sendError(errorMsg);
          return throwError(() => errorMsg);
        }));
  }
}