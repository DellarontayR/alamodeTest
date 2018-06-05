import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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
    return this.http.put('/api/activate' + token).pipe(catchError(this.handleError('error')));
  };

  registerMookie = function (regData) {
    return this.http.post('/api/registerMookie', regData).pipe(catchError(this.handleError('error')));
  }

  facebookRegister = function (regData) {
    return this.http.post('/api/facebookRegister', regData).pipe(catchError(this.handleError('error')));
  }

  getUsers = function () {
    return this.http.post('/api/getUsers').pipe(catchError(this.handleError('error')));
  }

  getUserId = function () {
    return this.http.get('/api/getUserId').pipe(catchError(this.handleError('error')));
  };

  getUser = function (userData) {
    return this.http.post('/api/getUser', userData).pipe(catchError(this.handleError('error')));
  };

  removeCart = function (userData) {
    return this.http.post('/api/removeCart', userData).pipe(catchError(this.handleError('error')));
  };

  getOldCarts = function (userData) {
    return this.http.post('/api/getOldCarts', userData).pipe(catchError(this.handleError('error')));
  };

  // Register users in database
  create = function (regData) {
    return this.http.post('/api/users', regData).pipe(catchError(this.handleError('error')));
  };

  register = function (regData) {
    return this.http.post('/api/register-user', regData).pipe(catchError(this.handleError('error')));
  };

  // Check if username is available at registration
  checkUsername = function (regData) {
    return this.http.post('/api/checkusername', regData).pipe(catchError(this.handleError('error')));
  };

  // Check if e-mail is available at registration
  checkEmail = function (regData) {
    return this.http.post('/api/checkemail', regData).pipe(catchError(this.handleError('error')));
  };

  // Check credentials before re-sending activation link
  checkCredentials = function (loginData) {
    return this.http.post('/api/resend', loginData).pipe(catchError(this.handleError('error')));
  };

  // Send new activation link to user
  resendLink = function (username) {
    return this.http.put('/api/resend', username).pipe(catchError(this.handleError('error')));
  };

  // Send user's username to e-mail
  sendUsername = function (userData) {
    return this.http.get('/api/resetusername/' + userData).pipe(catchError(this.handleError('error')));
  };

  // Send password reset link to user's e-mail
  sendPassword = function (resetData) {
    return this.http.put('/api/resetpassword', resetData).pipe(catchError(this.handleError('error')));
  };

  // Grab user's information from e-mail reset link
  resetUser = function (token) {
    return this.http.get('/api/resetpassword/' + token).pipe(catchError(this.handleError('error')));
  };

  // Save user's new password
  savePassword = function (regData) {
    return this.http.put('/api/savepassword', regData).pipe(catchError(this.handleError('error')));
  };

  // Provide the user with a new token
  renewSession = function (username) {
    return this.http.get('/api/renewToken/' + username).pipe(catchError(this.handleError('error')));
  };

  // Get the current user's permission
  getPermission = function () {
    return this.http.get('/api/permission/').pipe(catchError(this.handleError('error')));
  };


}
