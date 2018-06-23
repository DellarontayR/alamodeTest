import { Component, OnInit } from '@angular/core';
import { ILooseObject } from '../../interfaces/looseObject';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';

@Component({
  selector: 'app-mookie-manage-order',
  templateUrl: './mookie-manage-order.component.html',
  styleUrls: ['./mookie-manage-order.component.scss']
})
export class MookieManageOrderComponent implements OnInit {

  order: ILooseObject;
  order$: Observable<any>;
  deliveryStatus: [String];
  distanceFromUser: String;
  timeFromUser: String;
  userContactNumber;
  directionsDisplay: any;

  // for google maps
  public latitude: number;
  public longitude: number;
  public zoom: number;


  constructor(private orderService: OrderService, private activatedRoute: ActivatedRoute, private mapsLoader: MapsAPILoader, private mapsWrapper: GoogleMapsAPIWrapper) { }

  ngOnInit() {
    this.zoom = 14;
    this.distanceFromUser = "";
    this.timeFromUser = "";
    this.longitude = -122.15756340000002;
    this.latitude = 37.4266083;
    this.order = {customerReceipt:{customerCart:{products:[]}}};
    // Get param
    this.order$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.orderService.getOrder({ orderId: params.get('orderId') });
      }));
    this.order$.subscribe(data => {
      if (data.success) {
        if (data.order) {
          
          this.order = data.order;
          this.latitude = this.order.customerReceipt.geometryAddress.lat;
          this.longitude = this.order.customerReceipt.geometryAddress.lng;

          this.mapsWrapper.getNativeMap().then((map) => {
            let directionsService = new google.maps.DirectionsService();
            this.directionsDisplay = new google.maps.DirectionsRenderer;
            this.directionsDisplay.setMap(map);
            this.directionsDisplay.setOptions({
              polylineOptions: {
                strokeWeight: 8,
                strokeOpacity: 0.7,
                strokeColor: '#00468c'
              }
            });


            let request = {
              origin: new google.maps.LatLng(this.order.currentDriverLocation.lat, this.order.currentDriverLocation.lng),
              destination: new google.maps.LatLng(this.order.customerReceipt.geometryAddress.lat, this.order.customerReceipt.geometryAddress.lng)
            };
            directionsService.route(request, function (result, status) {
              console.log(result);
              console.log(status);
              if (status.toString() === 'OK') {
                this.directionsDisplay.setDirections(result);
                var route = result.routes[0];

                // for (var i = 0; i < route.legs.length; i++) {
                //   // ("123 hello everybody 4").replace(/(^\d+)(.+$)/i,'$1'); //=> '123' regex to first integer from string
                //   // replace(/[^0-9.]/g, ""); Regex to get only numbers from string
                //   // scope.manager.distanceFromUser += route.legs[i].distance.text.replace(/[^0-9.]/g, "");//Possibly to count up total time
                // }
                this.distanceFromUser = route.legs[0].distance.text.replace(/[^0-9.]/g, "");
                this.timeFromUser = route.legs[0].duration.text.replace(/[^0-9.]/g, "");
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

    this.deliveryStatuses = ['Pending', 'OutForOrders', 'OnTheWay', 'Completed'];
    // Set order Id as well to get order from route


    let orderData = { lat: coords.latitude, lng: coords.longitude, order: this.order._id };

    this.orderService.updateDriverLocation(orderData).subscribe(data => {
      if (data.success) {
        // update admin on success
      }
      else {
        //update admin on failure
      }
    });
  };
  handleErr = function (err) {
    console.log('position could not be set');
    console.log(err);
  }

  updateCurrentLocation = function () {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(this.updateCurrentLocation, this.handleErr, { timeout: 500, maximumAge: Infinity });//Did not work with option enableHighAccuracy set to true
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
