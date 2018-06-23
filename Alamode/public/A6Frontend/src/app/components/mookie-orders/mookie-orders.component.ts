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

  // for google maps
  public latitude: number;
  public longitude: number;
  public zoom: number;


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
          this.ngZone.run(()=>{
            this.latitude = this.order.customerReceipt.geometryAddress.lat;
            this.longitude = this.order.customerReceipt.geometryAddress.lng;
            this.zoom = 16;
          });
        });
      }
    });
  }

}