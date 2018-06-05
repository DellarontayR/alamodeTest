import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

import { IUser } from '../interfaces/user';
import { WindowRefService } from './window-ref.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

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


  authenticate = '/api/authenticate';
    
  login = function () {
    return this.http.post(this.authenticate).pipe(catchError(this.handleError('error')))
  }

  isLoggedIn = function () {
    // Check if user is logged in
    // return 
    if (this.getToken()) {
      return true;
    }
    else return false;
  }
  socialMedia = function () {
    // setToken()
    // Set socialMedia function's previous uses to simply setToken
  }

  getUser = function () {
    if (this.isLoggedIn()) {
      return this.http.post('/api/me').pipe(catchError(this.handleError('error')));
    }
    else {
      return Promise.reject(new Error('No token provided')).then(res => { console.log(res) }, err => { console.log(err) });
    }
  }

  setToken = function (token) {
    const windowRef = this.windowRef.nativeWindow();

    if (token) {
      windowRef.localStorage.setItem('token', token);
    }
    else {
      windowRef.localStorage.removeItem('token');
    }
  }

  getToken = function () {
    const windowRef = this.windowRef.nativeWindow();
    return windowRef.localStorage.getItem('token');
  }

  logout = function () {
    this.setToken();
  }

  hasPermission = function(permission){
    // 

  }

  // Schedule Service
  getOreringSchdule = function(){
    return this.http.post('/api/checkOrderingSchedule').pipe(catchError(this.handleError('error')));
  }

  // Subscription
  addSubscription = function (subData) {
    return this.http.post('/api/addSubscription', subData).pipe(catchError(this.handleError('error')));
  }
  getSubscribers = function(){
    return this.http.get('/api/getSubscribers').pipe(catchError(this.handleError('error')));
};

  // Contact Message
  addContactMessage = function (contactData) {
    return this.http.post('/api/addContactMessage', contactData).pipe(catchError(this.handleError('error')));
  }
  getContactMessages = function(){
    return this.http.get('/api/getContactMessages').pipe(catchError(this.handleError('error')));
};


  // Visitor
  checkVisitor = function (ipData) {
    return this.http.post('/api/checkVisitor', ipData).pipe(catchError(err => this.handleError(err)));
  }
  // IP
  getIp = function (data) {
    return this.http.post('https://ipinfo.io/?format=jsonp/').pipe(catchError(this.handleError('error')));
  }
  getSiteVisitors = function () {
    return this.http.post('/api/getSiteVisitors').pipe(catchError(this.handleError('error')));
  }



}

