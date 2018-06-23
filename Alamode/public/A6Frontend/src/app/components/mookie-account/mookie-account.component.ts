import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { UserService } from '../../services/user.service';
import { OrderService } from '../../services/order.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mookie-account',
  templateUrl: './mookie-account.component.html',
  styleUrls: ['./mookie-account.component.scss']
})
export class MookieAccountComponent implements OnInit {

  constructor(private shared: SharedService, private userService: UserService, private orderService: OrderService, private authService:AuthService, private router: Router) { }

  ngOnInit() {
    this.admin =false;

    let sessionVars = this.shared.getSharedVars();
    if (sessionVars.user.user.username) this.username = sessionVars.user.user.username;
    if (sessionVars.user.user.email) this.userEmail = sessionVars.user.user.email;
    let userData = { username: this.username, userEmail: this.userEmail };
    console.log(userData);

    this.userService.getUser(userData).subscribe(data => {
      if (data.success) {
        let getOrderData = { userId: data.user._id };
        if(data.user.permission === 'admin') this.admin = true;
        this.orderService.getUserOrders(getOrderData).subscribe(orderData => {
          if (data.success) {
            this.orderHistory = data.orders;
          }
          else {
            // Couldn't get order history
            // Display an error saying something is going wrong on this page and we're working on it
          }
        });
      }
      else {
        console.log('Could not get user');
        // Couldn't get user redirect from page
        // this.authService.logout();
        // this.shared.updateSharedVar('loggedIn',false);
        // this.router.navigate(['/register']);
      }
    });

  }


  logout = function(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  carts;
  cartHistory;
  orderHistory;
  username: String;
  userEmail: String;
  admin: Boolean;
}
