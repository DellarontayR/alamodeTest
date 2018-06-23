import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { WindowRefService } from './window-ref.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

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

  seedProduct = function (productData) {
    return this.http.post('/api/seedProduct', productData).pipe(map(res => {
      console.log(res);
      return res;
    }), catchError(err => this.handleError(err)));
  }

  updateProductQty = function (productData) {
    return this.http.post('/api/updateProductQty', productData).pipe(map(res => {
      console.log(res);
      return res;
    }), catchError(err => this.handleError(err)));
  };

  deleteProduct = function (productData) {
    return this.http.post('/api/deleteProduct', productData).pipe(map(res => {
      console.log(res);
      return res;
    }), catchError(err => this.handleError(err)));
  };

  getProduct = function (productId) {
    return this.http.get('/api/getProduct', productId).pipe(map(res => {
      console.log(res);
      return res;
    }), catchError(err => this.handleError(err)));
  };

  getCatalogProducts = function () : Observable<any>{
    return this.http.post('/api/getCatalogProducts').pipe(map(res => {
      console.log(res);
      return res;
    }), catchError(err => this.handleError(err)));
  };

  getProductCategory = function (categoryData) {
    return this.http.post('/api/getProductCategory', categoryData).pipe(map(res => {
      console.log(res);
      return res;
    }), catchError(err => this.handleError(err)));
  };


  addProductToCatalog = function (product) {
    return this.http.post('/api/addProductToCatalog', product).pipe(map(res => {
      console.log(res);
      return res;
    }), catchError(err => this.handleError(err)));
  };
}
