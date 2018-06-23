import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { IUser } from '../interfaces/user';
import { WindowRefService } from './window-ref.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  activateAccount = function (token) {
    return this.http.put('/api/activate' + token).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  registerMookie = function (regData) {
    return this.http.post('/api/registerMookie', regData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  }

  facebookRegister = function (regData) {
    return this.http.post('/api/facebookRegister', regData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  }

  getUsers = function () {
    return this.http.post('/api/getUsers').pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  }

  getUserId = function () {
    return this.http.get('/api/getUserId').pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  getUser = function (userData) {
    return this.http.post('/api/getUser', userData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  removeCart = function (userData) {
    return this.http.post('/api/removeCart', userData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  getOldCarts = function (userData) {
    return this.http.post('/api/getOldCarts', userData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Register users in database
  create = function (regData) {
    return this.http.post('/api/users', regData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  register = function (regData) {
    return this.http.post('/api/register-user', regData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Check if username is available at registration
  checkUsername = function (regData) {
    return this.http.post('/api/checkusername', regData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Check if e-mail is available at registration
  checkEmail = function (regData) {
    return this.http.post('/api/checkemail', regData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Check credentials before re-sending activation link
  checkCredentials = function (loginData) {
    return this.http.post('/api/resend', loginData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Send new activation link to user
  resendLink = function (username) {
    return this.http.put('/api/resend', username).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Send user's username to e-mail
  sendUsername = function (userData) {
    return this.http.get('/api/resetusername/' + userData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Send password reset link to user's e-mail
  sendPassword = function (resetData) {
    return this.http.put('/api/resetpassword', resetData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Grab user's information from e-mail reset link
  resetUser = function (token) {
    return this.http.get('/api/resetpassword/' + token).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Save user's new password
  savePassword = function (regData) {
    return this.http.put('/api/savepassword', regData).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Provide the user with a new token
  renewSession = function (username) {
    return this.http.get('/api/renewToken/' + username).pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };

  // Get the current user's permission
  getPermission = function () {
    return this.http.get('/api/permission/').pipe(map(res => { console.log(res); return res; }), catchError(err => this.handleError(err)));
  };


}
