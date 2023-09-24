import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SpinnerService } from '../../services';

/**
 * Shows and hides the loading spinner during HTTP requests.
 */
@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.add();
    return next.handle(request)
      .pipe(finalize(() => this.spinnerService.remove()));
  }
}