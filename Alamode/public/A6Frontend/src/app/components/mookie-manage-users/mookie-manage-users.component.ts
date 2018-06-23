import { Component, OnInit } from '@angular/core';
import { ILooseObject } from '../../interfaces/looseObject';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-mookie-manage-users',
  templateUrl: './mookie-manage-users.component.html',
  styleUrls: ['./mookie-manage-users.component.scss']
})
export class MookieManageUsersComponent implements OnInit {

  users: [ILooseObject];
  constructor(private userService:UserService) { }


  ngOnInit() {
    this.getUsers();
  }

  // Get Users for Management
  getUsers = function () {
    this.userService.getUsers().subscribe(data => {
      if (data.success) {
        this.users = data.users;
      }
      else{
        // display general admin error
      }
    });
  };
  // >

}

// var manage = this;
// //$scope.mookie
// //Get Product Catalog
// $scope.mookie.getProductsFromServer(function (catalogProducts) {
//     manage.products = catalogProducts;
// });

// //Get Subscriptions

// $scope.mookie.getSubscribers(function (subscribers) {
//     manage.subscribers = subscribers;
// });


// //Get ContactMessages

// $scope.mookie.getContactMessages(function (contactMessages) {
//     manage.contactMessages = contactMessages;
// });


// // 
// manage.getCurrentOrders = function () {
//     console.log('getting orders');
//     orderService.getCurrentOrders().then(function (data) {
//         console.log(data.data.orders);
//         console.log(data);
//         manage.orders = data.data.orders;
//     }, function (err) {
//         console.log('error geeting orders');
//         console.log(err);
//     });
// };

// manage.getCurrentOrders();
