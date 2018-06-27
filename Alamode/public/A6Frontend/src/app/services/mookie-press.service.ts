import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MookiePressService {

  constructor(private http:HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(error);
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  // create, getall,get

  createPR = function(prData){
    return this.http.post('/api/createPR',prData).pipe(map(res=>{console.log(res);return res;}),catchError(err=>this.handleError(err)));
  }

  getPR = function(prData){
    return this.http.post('/api/getPR',prData).pipe(map(res=>{console.log(res);return res;}),catchError(err=>this.handleError(err)));
  }

  getPRs = function(){
    return this.http.post('/api/getPRs').pipe(map(res=>{console.log(res);return res;}),catchError(err=>this.handleError(err)));
  }
}


  // // Update Inventory 
  // updateInventory = function (inventoryData) {
  //   return this.http.post('/api/updateInventory', inventoryData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  // };