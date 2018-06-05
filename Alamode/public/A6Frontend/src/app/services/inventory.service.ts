import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
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
    return this.http.post('/api/updateInventory', inventoryData).pipe(catchError(this.handleError('error')));
  };

  // Get inventory to laod in frontend
  getInventory = function () {
    return this.http.post('/api/getInventory').pipe(catchError(this.handleError('error')));
  };

  // Remove an inventory update
  removeInventoryUpdate = function (itemData) {
    return this.http.post('/api/removeInventoryUpdate', itemData).pipe(catchError(this.handleError('error')));
  };

  // Get totals to let user know if product is in stock
  // getInventoryTotals = function(){
  //     return this.http.post('/api/getInventoryTotals');
  // };
}
