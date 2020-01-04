import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  baseUrl = 'http://localhost:8080/api';

  apps       : string[];
  columns    : string[];
  column: string[];
  

  constructor(private http: HttpClient) {}

  getColumns(): Observable<string[]> {
    return this.http.get(`${this.baseUrl}/columnsApps.php`).pipe(
      map((res: string[]) => {
        this.columns = res['data'];
        console.log(this.columns);
        return this.columns;
      }),
      catchError(this.handleError)
    );
  }

  getColumn(column:string, appName: string, selectedValues:string[]): Observable<string[]> {
    console.log(selectedValues);
    return this.http.post(`${this.baseUrl}/getColumn.php`, {column:column, appName:appName, selectedValues:selectedValues}).pipe(
      map((res: string[]) => {
        this.column = res['data'];
        console.log(this.column);
        return this.column;
      }),
      catchError(this.handleError)
    );
  }
  
  rechercheColonnes(index:number, app:string){

    return this.http.post(`${this.baseUrl}/getColumnsApps.php`, {app:app}).pipe(
      map((res: string[]) => {
        this.columns = res['data'];
        console.log(this.columns);
        return this.columns;
      }),
      catchError(this.handleError)
    );
    
  }
  
  handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}

