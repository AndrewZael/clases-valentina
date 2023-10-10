import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (req.url.endsWith('/pructos')) {
      const errorResponse = new HttpErrorResponse({
        error: 'Error 404 simulado',
        status: 404,
        statusText: 'Not found',
      });
      return throwError(errorResponse);
    }else{

    }
    return next.handle(req);
  }
}
