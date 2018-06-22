import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ILooseObject } from '../interfaces/looseObject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  checkingSession = false;
  cart = {};
  cartItemCount:Number = 0;
  admin = false;
  products = {};
  loggedIn = false;
  deliveryLatLng = {};
  deliveryLocationChanged = false;
  deliveryLocation = null;
  numberOfSiteVisitors = 0;
  user: ILooseObject = {userEmail:'',username:''};
  contactMes = {};

  updateSharedVar = function (varId, data) {
    switch (varId) {
      case "checkingSession": {
        this.checkingSession = data;
        break;
      }
      case "cart": {
        this.cart = data;
        break;
      }
      case "cartItemCount": {
        this.cartItemCount = data;
        break;
      }
      case "admin": {
        this.admin = data;
        break;
      }
      case "products": {
        this.products = data;
        break;
      }
      case "loggedIn": {
        this.loggedIn = data;
        break;
      }
      case "deliveryLatLng": {
        this.deliveryLatLng = data;
        break;
      }
      case "deliveryLocationChanged": {
        this.deliveryLocationChanged = data;
        break;
      }
      case "deliveryLocation": {
        this.deliveryLocation = data;
        break;
      }
      case "numberOfSiteVisitors": {
        this.numberOfSiteVisitors = data;
        break;
      }
      case "user": {
        this.user = data;
        break;
      }
      case "contactMes": {
        this.contactMes = data;
        break;
      }
      default: {
        console.log(varId);
        console.log(data);
        // Telemetry for error
      }
    }

  }

  addMinUser = function(userEmail,username){
    this.user.userEmail = userEmail;
    this.user.username = username;
  }

  getSharedVar = function (varId) {
    switch (varId) {
      case "checkingSession": {
        return this.checkingSession;
      }
      case "cart": {
        return this.cart;
      }
      case "cartItemCount": {
        return this.cartItemCount;
      }
      case "admin": {
        return this.admin;
      }
      case "products": {
        return this.products;
      }
      case "loggedIn": {
        return this.loggedIn;
      }
      case "deliveryLatLng": {
        return this.deliveryLatLng;
      }
      case "deliveryLocationChanged": {
        return this.deliverlyLocationChanged;
      }
      case "deliveryLocation": {
        return this.deliveryLocation;
      }
      case "numberOfSiteVisitors": {
        return this.numberOfSiteVisitors;
      }
      case "user": {
        return this.user;
      }
      case "contactMes": {
        return this.contactMes
      }
      default: {
        console.log(varId);
        return Error('incorrect var');
        // Telemetry for error
      }
    }
  };

  getSharedVars = function(){
    return {checkingSession:this.checkingSession,cart:this.cart,cartItemCount:this.cartItemCount,admin:this.admin,products:this.products,loggedIn:this.loggedIn,deliveryLatLng:this.deliveryLatLng,deliveryLocationChanged:this.deliveryLocationChanged,deliveryLocation:this.deliveryLocation,numberOfSiteVisitors:this.numberofSitVisitors,user:this.user,contactMes:this.contactMes};
  };
}
