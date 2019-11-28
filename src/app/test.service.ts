import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  baseUrl = 'http://localhost:8080/api';
  //tests: Testv1[];
  columns      : string [];
  columnsRoles : string [];
  columnsRoles2: string [];

  constructor(private http:HttpClient) { }


  getColumns(): Observable<string []> {
    return this.http.get(`${this.baseUrl}/columnsTestv1.php`).pipe(
      map((res : string[]) => {
        this.columns = res['data'];
        console.log(this.columns);
        return this.columns;
    }),
    catchError(this.handleError));
  }

  getColumnsRoles(): Observable<string []> {
    return this.http.get(`${this.baseUrl}/columnsRolesTestv2.php`).pipe(
      map((res : string[]) => {
        this.columnsRoles = res['data'];
        console.log(this.columnsRoles);
        return this.columnsRoles;
    }),
    catchError(this.handleError));
  }

  getColumnsRoles2(): Observable<string []> {
    return this.http.get(`${this.baseUrl}/columnsRolesTestv3.php`).pipe(
      map((res : string[]) => {
        this.columnsRoles2 = res['data'];
        console.log(this.columnsRoles2);
        return this.columnsRoles2;
    }),
    catchError(this.handleError));
  }
  


  handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
