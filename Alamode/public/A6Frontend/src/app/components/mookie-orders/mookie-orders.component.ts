import { Component, OnInit, NgZone } from '@angular/core';
import { ILooseObject } from '../../interfaces/looseObject';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { MapsAPILoader } from '@agm/core';



@Component({
  selector: 'app-mookie-orders',
  templateUrl: './mookie-orders.component.html',
  styleUrls: ['./mookie-orders.component.scss']
})
export class MookieOrdersComponent implements OnInit {

  constructor(private orderService: OrderService, private actiavtedRoute: ActivatedRoute, private mapsLoader: MapsAPILoader, private ngZone: NgZone) { }

  order: ILooseObject;
  // orderData: { orderId: "" };
  statusMap: Map<String, String>;
  order$: Observable<any>;
  orderMessage: String;
  orderUpdate:String;
  directionsFailed:Boolean = false;

  // for google maps
  public latitude: number;
  public longitude: number;
  public zoom: number;
  public map: google.maps.Map;
  public directionsDisplay: any;


  ngOnInit() {
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    this.order = {};
    this.statusMap = new Map();
    // this.orderData
    this.statusMap.set('Pending', 'Your order is being Prepared');
    this.statusMap.set('OnTheWay', 'The driver is out with your order!');
    this.statusMap.set('Completed', 'Your order was completed');

    this.order$ = this.actiavtedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.orderService.getOrder({ orderId: params.get('orderId') });
      }));

    this.order$.subscribe(data => {
      console.log(data);
      if (data.success) {
        this.order = data.order;
        this.orderMessage = this.statusMap.get(this.order.orderStatus);
        console.log(this.order);

        this.mapsLoader.load().then(() => {
          this.ngZone.run(() => {
            let directionsService = new google.maps.DirectionsService();
            this.directionsDisplay = new google.maps.DirectionsRenderer;
            let userLatLng = new google.maps.LatLng(this.order.customerReceipt.geometryAddress.lat, this.order.customerReceipt.geometryAddress.lng);
            let driverLatLng = new google.maps.LatLng(this.order.currentDriverLocation.lat, this.order.currentDriverLocation.lng);
            let mapOptions = {
              center: userLatLng,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            this.map = new google.maps.Map(document.getElementById('mookieUserMap'), mapOptions);
            this.directionsDisplay.setMap(this.map);

            let request = {
              origin: userLatLng,
              destination: driverLatLng,
              travelMode: google.maps.TravelMode["BICYCLING"]
            };

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

                this.orderUpdate = "Driver is " + route.legs[0].distance.text.replace(/[^0-9.]/g, "")+ " miles  away. The driver is  " + route.legs[0].duration.text.replace(/[^0-9.]/g, "") + " minutes away from your location.";

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


            // this.latitude = this.order.customerReceipt.geometryAddress.lat;
            // this.longitude = this.order.customerReceipt.geometryAddress.lng;
            // this.zoom = 16;
          });
        });
      }
    });
  }

}