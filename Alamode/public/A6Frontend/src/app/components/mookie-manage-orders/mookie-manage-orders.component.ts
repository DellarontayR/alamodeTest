import { Component, OnInit } from '@angular/core';
import { ILooseObject } from '../../interfaces/looseObject';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-mookie-manage-orders',
  templateUrl: './mookie-manage-orders.component.html',
  styleUrls: ['./mookie-manage-orders.component.scss']
})
export class MookieManageOrdersComponent implements OnInit {

  orders: [ILooseObject];
  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders = function () {
    this.orderService.getCurrentOrders().subscribe(data => {
      if (data.success) {
        this.orders = data.orders;
      }
      else {
        // display general admin error
      }
    });

  }

}
