import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }

  // Consolidate handle error into one servie?

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  deleteCartProduct = function (productData) {
    return this.http.post('/api/deleteCartProduct', productData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  }
  updateCart = function (cartData) {
    return this.http.post('/api/updateUserCart', cartData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  }
  getCart = function (cartId) {
    return this.http.post('/api/getCart', cartId).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  }

  seedCart = function (cartData) {
    return this.http.post('/api/seedCart', cartData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  }
  deleteCart = function (cartData) {
    return this.http.post('/api/deleteCart', cartData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  }
  getAProduct = function () {
    return this.http.get('/api/getAProduct');
  }
  addCartToUser = function (userData) {
    return this.http.post('/api/addCartToUser', userData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  }
  addItemToCart = function (productData) {
    return this.http.post('/api/addItemToCart', productData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  }
  removeItemFromCart = function (item) {
    return this.http.post('/api/remove-cart-item', item).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  }
  checkout = function (checkoutData) {
    return this.http.post('/api/cartCheckout', checkoutData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  }

}
