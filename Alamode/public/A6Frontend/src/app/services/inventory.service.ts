import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { WindowRefService } from './window-ref.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient, private windowRef: WindowRefService) { }

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


  // Update Inventory 
  updateInventory = function (inventoryData) {
    return this.http.post('/api/updateInventory', inventoryData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Get inventory to laod in frontend
  getInventory = function () {
    return this.http.post('/api/getInventory').pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Remove an inventory update
  removeInventoryUpdate = function (itemData) {
    return this.http.post('/api/removeInventoryUpdate', itemData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Get totals to let user know if product is in stock
  // getInventoryTotals = function(){
  //     return this.http.post('/api/getInventoryTotals');
  // };
}
