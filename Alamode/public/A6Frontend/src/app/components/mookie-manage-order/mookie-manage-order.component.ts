import { Component, OnInit, AfterViewInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { ILooseObject } from '../../interfaces/looseObject';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { } from 'googlemaps';

import { faMapMarker } from '../../../assets/fontawesome-free-5.0.3/advanced-options/use-with-node-js/fontawesome-free-solid';

@Component({
  selector: 'app-mookie-manage-order',
  templateUrl: './mookie-manage-order.component.html',
  styleUrls: ['./mookie-manage-order.component.scss']
})
export class MookieManageOrderComponent implements OnInit, AfterViewInit {
  updateLocationSuccess: Boolean;
  updateLocationFailure: Boolean;
  order: ILooseObject;
  order$: Observable<any>;
  deliveryStatus: [String];
  deliveryLocation: String;
  distanceFromUser: String;
  timeFromUser: String;
  userContactNumber;
  directionsDisplay: any;
  directionsFailed: Boolean;
  userMarker: ILooseObject = {};
  driverMarker: ILooseObject = {};

  // for google maps
  public latitude: number;
  public longitude: number;
  public zoom: number;
  public map: google.maps.Map;

  // markers: [{}];


  constructor(private orderService: OrderService, private activatedRoute: ActivatedRoute, private mapsLoader: MapsAPILoader, private mapsWrapper: GoogleMapsAPIWrapper, private ngZone: NgZone, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.deliveryLocation = "";

    this.updateLocationSuccess = false;
    this.updateLocationFailure = false;
    this.directionsFailed = false;
    // this.markers = [{}];
    this.zoom = 14;
    this.distanceFromUser = "";
    this.timeFromUser = "";
    this.longitude = -122.15756340000002;
    this.latitude = 37.4266083;
    this.order = { customerReceipt: { customerCart: { products: [] } } };
    // Get param
    this.order$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.orderService.getOrder({ orderId: params.get('orderId') });
      }));

  }

  ngAfterViewInit() {
    // this.mapsWrapper.getNativeMap().then(map => { this.directionsDisplay.setMap(map); }, err => { console.log(err); });

    this.updateLocationSuccess = false;
    this.updateLocationFailure = false;
    this.order$.subscribe(data => {
      if (data.success) {
        if (data.order) {

          this.order = data.order;
          this.latitude = this.order.customerReceipt.geometryAddress.lat;
          this.longitude = this.order.customerReceipt.geometryAddress.lng;

          this.mapsLoader.load().then(() => {
            let directionsService = new google.maps.DirectionsService();
            this.directionsDisplay = new google.maps.DirectionsRenderer;

            let userLatLng = new google.maps.LatLng(this.order.customerReceipt.geometryAddress.lat, this.order.customerReceipt.geometryAddress.lng);
            let driverLatLng = new google.maps.LatLng(this.order.currentDriverLocation.lat, this.order.currentDriverLocation.lng);
            let mapOptions = {
              center: userLatLng,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(document.getElementById('mookieManageMap'), mapOptions);

            this.userMarker = { latitude: this.order.customerReceipt.geometryAddress.lat as Number, longitude: this.order.customerReceipt.geometryAddress.lng as Number };
            this.driverMarker = { latitude: this.order.currentDriverLocation.lat as Number, longitude: this.order.currentDriverLocation.lng as Number };
            this.deliveryLocation = this.order.customerReceipt.customerAddress;

            let mUserMarker = new google.maps.Marker({
              position: userLatLng,
              map: this.map,
              title: this.deliveryLocation.toString()
            });
            let mDriverMarker = new google.maps.Marker({
              position: driverLatLng,
              map: this.map,
              title: 'Driver'
            });

            // mUserMarker.setMap(this.map);
            // mDriverMarker.setMap(this.map);
            this.directionsDisplay.setMap(this.map);

            let request = {
              origin: userLatLng,
              destination: driverLatLng,
              travelMode: google.maps.TravelMode["BICYCLING"]
            };

            console.log(request);
            directionsService.route(request, (result, status) => {
              console.log(result);
              console.log(status);
              if (status.toString() === 'OK') {
                console.log(result);

                var route = result.routes[0];

                // for (var i = 0; i < route.legs.length; i++) {
                //   // ("123 hello everybody 4").replace(/(^\d+)(.+$)/i,'$1'); //=> '123' regex to first integer from string
                //   // replace(/[^0-9.]/g, ""); Regex to get only numbers from string
                //   // scope.manager.distanceFromUser += route.legs[i].distance.text.replace(/[^0-9.]/g, "");//Possibly to count up total time
                // }
                this.distanceFromUser = route.legs[0].distance.text.replace(/[^0-9.]/g, "");
                this.timeFromUser = route.legs[0].duration.text.replace(/[^0-9.]/g, "");

                this.directionsDisplay.setOptions({
                  polylineOptions: {
                    strokeWeight: 8,
                    strokeOpacity: 0.7,
                    strokeColor: '#00468c'
                  }
                });
                this.directionsDisplay.setDirections(result);
                google.maps.event.trigger(this.map, "resize");


              }
              else {
                this.directionsFailed = true;
              }
            });

          });
        }
      }
      else {
        // Display general admin error
      }
    });

  }

  updateDriverLocation = function (pos) {
    let coords = pos.coords;
    this.updateLocationSuccess = false;
    this.updateLocationFailure = false;

    // this.deliveryStatuses = ['Pending', 'OutForOrders', 'OnTheWay', 'Completed'];
    // Set order Id as well to get order from route
    console.log(this);

    this.ngZone.run(() => {
      let orderData = { lat: coords.latitude, lng: coords.longitude, order: this.order._id };

      this.orderService.updateDriverLocation(orderData).subscribe(data => {
        if (data.success) {
          this.updateLocationSuccess = true;
          // update admin on success
          // this.
        }
        else {
          //update admin on failure
          this.updateLocationFailure = true
        }
      });
    })

  };
  handleErr = function (err) {
    this.updateLocationFailure = true;
  }

  updateCurrentLocation = function () {
    if ("geolocation" in navigator) {

      navigator.geolocation.getCurrentPosition((pos) => {
        this.updateDriverLocation(pos);
      }, this.handleErr, { timeout: 500, maximumAge: Infinity });//Did not work with option enableHighAccuracy set to true
    }
  };

  //         // Updated order Delivery status

  updateDeliveryStatus = function (status) {
    let orderData = { orderStatus: status, orderId: this.order._id };
    this.orderService.updateDeliveryStatus(orderData).subscribe(data => {
      if (data.success) {
        this.order.orderStatus = status;
      }
      else {
        // display genreal admin error
      }
    });
  };
}
//         // //Tracking users position
//         // watchId = navigator.geolocation.watchPosition(
//         //     processGeolocation,
//         //     // Optional settings below
//         //     geolocationError,
//         //     {
//         //         timeout: 0,
//         //         enableHighAccuracy: true,
//         //         maximumAge: Infinity
//         //     }
//         // );
