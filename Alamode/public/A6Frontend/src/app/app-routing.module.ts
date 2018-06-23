import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute, NavigationStart } from '@angular/router';


import { MookieHeaderComponent } from './components/mookie-header/mookie-header.component';
import { MookieFooterComponent } from './components/mookie-footer/mookie-footer.component';
import { MookieHomeComponent } from './components/mookie-home/mookie-home.component';
import { MookiePagenotfoundComponent } from './components/mookie-pagenotfound/mookie-pagenotfound.component';
import { MookieSocialComponent } from './components/mookie-social/mookie-social.component';
import { MookieRegisterComponent } from './components/mookie-register/mookie-register.component';
import { MookieMenuComponent } from './components/mookie-menu/mookie-menu.component';
import { MookieAboutComponent } from './components/mookie-about/mookie-about.component';
import { MookieAccountComponent } from './components/mookie-account/mookie-account.component';
import { MookieCartComponent } from './components/mookie-cart/mookie-cart.component';
import { MookieCheckoutComponent } from './components/mookie-checkout/mookie-checkout.component';
import { MookieOrdersComponent } from './components/mookie-orders/mookie-orders.component';
import { MookieManageComponent } from './components/mookie-manage/mookie-manage.component';
import { MookieManageUsersComponent } from './components/mookie-manage-users/mookie-manage-users.component';
import { MookieManageOrdersComponent } from './components/mookie-manage-orders/mookie-manage-orders.component';
import { MookieManageInventoryComponent } from './components/mookie-manage-inventory/mookie-manage-inventory.component';
import { MookieManageOrderComponent } from './components/mookie-manage-order/mookie-manage-order.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MookieHomeComponent },
  { path: 'menu', component: MookieMenuComponent },
  { path: 'about', component: MookieAboutComponent },
  { path: 'thesecret', component: MookieSocialComponent },
  { path: 'register', component: MookieRegisterComponent },
  { path: 'account', component: MookieAccountComponent },
  { path: 'shopping-cart', component: MookieCartComponent },
  { path: 'ontheway', component: MookieCheckoutComponent },
  { path: 'orders/:orderId', component: MookieOrdersComponent },
  {
    path: 'management', component: MookieManageComponent,
    children: [{
      path: 'users',
      component: MookieManageUsersComponent
    },
    {
      path: 'currentorders',
      component: MookieManageOrdersComponent,
      children: [
        {
          path: 'order/:orderId',
          component: MookieManageOrderComponent
        }
      ]
    },
    {
      path: 'inventory',
      component: MookieManageInventoryComponent
    }
    ]
  },
  
  { path: "**", component: MookiePagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

