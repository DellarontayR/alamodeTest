import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

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

  // Get current orders for management
  getCurrentOrders = function () {
      return this.http.post('/api/getcurrentOrders').pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Get order for management and customers
  getOrder = function (orderId) {
      return this.http.post('/api/getOrder', orderId).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Update driver location for an order
  updateDriverLocation = function (driverLatLng) {
      return this.http.post('/api/updateDriverLocation', driverLatLng).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Update the delivery status of an order
  updateDeliveryStatus = function (orderData) {
      return this.http.post('/api/updateDeliveryStatus', orderData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Get the old orders for the user
  getUserOrders = function(userData){
      return this.http.post('/api/getUserOrders',userData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };
}

