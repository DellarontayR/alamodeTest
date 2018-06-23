import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
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
    
  login = function (loginData) {
    return this.http.post(this.authenticate,loginData).pipe(map(res=>{
      console.log(res);
      return res;
    }),catchError(err => this.handleError(err)));
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
      return this.http.post('/api/me').pipe(map(res=>{
        console.log(res);
        return res;
      }),catchError(err => this.handleError(err)));
    }
    else {
      return Promise.reject(new Error('No token provided')).then(res => { console.log(res); }, err => { console.log(err) });
    }
  }

  setToken = function (token) {
    const windowRef = this.windowRef.nativeWindow;

    if (token) {
      windowRef.localStorage.setItem('token', token);
      console.log(windowRef.localStorage.getItem('token'));
    }
    else {
      windowRef.localStorage.removeItem('token');
    }
  }

  getToken = function () {
    const windowRef = this.windowRef.nativeWindow;
    console.log(windowRef.localStorage.getItem('token'));
    return windowRef.localStorage.getItem('token');
  }

  logout = function () {
    this.setToken();
  }

  // Schedule Service
  getOrderingSchedule = function(){
    return this.http.post('/api/checkOrderingSchedule').pipe(map(res=>{
      console.log(res);
      return res;
    }),catchError(err => this.handleError(err)));
  }

  // Subscription
  addSubscription = function (subData) {
    return this.http.post('/api/addSubscription', subData).pipe(map(res=>{
      console.log(res);
      return res;
    }),catchError(err => this.handleError(err)));
  }
  getSubscribers = function(){
    return this.http.get('/api/getSubscribers').pipe(map(res=>{
      console.log(res);
      return res;
    }),catchError(err => this.handleError(err)));
};

  // Contact Message
  addContactMessage = function (contactData) {
    return this.http.post('/api/addContactMessage', contactData).pipe(map(res=>{
      console.log(res);
      return res;
    }),catchError(err => this.handleError(err)));
  }
  getContactMessages = function(){
    return this.http.get('/api/getContactMessages').pipe(map(res=>{
      console.log(res);
      return res;
    }),catchError(err => this.handleError(err)));
};


  // Visitor
  checkVisitor = function (ipData) {
    return this.http.post('/api/checkVisitor', ipData).pipe(map(res=>{
      console.log(res);
      return res;
    }),catchError(err => this.handleError(err)));
  }
  // IP
  getIp = function (data) {
    return this.http.post('https://ipinfo.io/?format=jsonp/').pipe(map(res=>{
      console.log(res);
      return res;

    }),catchError(err => this.handleError(err)));
  }
  getSiteVisitors = function () {
    return this.http.post('/api/getSiteVisitors').pipe(map(res=>{
      console.log(res);
      return res;
    }),catchError(err => this.handleError(err)));
  }

}

