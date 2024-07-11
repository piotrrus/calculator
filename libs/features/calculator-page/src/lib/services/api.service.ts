import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, Observable, shareReplay, take, throwError } from 'rxjs';

@Injectable()
export abstract class ApiService {
  protected http = inject(HttpClient);

  protected get<T>(url: string): Observable<T> {
    return this.http.get<T>(url).pipe(
      shareReplay(1),
      take(1),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  protected post<T>(url: string, requestData: unknown): Observable<T> {
    return this.http.post<T>(url, requestData).pipe(
      shareReplay(1),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
