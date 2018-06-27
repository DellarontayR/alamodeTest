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
import { MookieFacebookComponent } from './components/mookie-facebook/mookie-facebook.component';
import { MookieGoogleComponent } from './components/mookie-google/mookie-google.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { MookieActivateComponent } from './components/mookie-activate/mookie-activate.component';
import { MookiePressComponent } from './components/mookie-press/mookie-press.component';
import { MookiePrComponent } from './components/mookie-pr/mookie-pr.component';
import { MookieManagePrComponent } from './components/mookie-manage-pr/mookie-manage-pr.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MookieHomeComponent },
  { path: 'menu', component: MookieMenuComponent },
  { path: 'about', component: MookieAboutComponent },
  { path: 'thesecret', component: MookieSocialComponent },
  { path: 'register', component: MookieRegisterComponent },
  { path: 'account', component: MookieAccountComponent, canActivate: [AuthGuard] },
  { path: 'shopping-cart', component: MookieCartComponent, canActivate: [AuthGuard] },
  { path: 'ontheway', component: MookieCheckoutComponent, canActivate: [AuthGuard] },
  { path: 'orders/:orderId', component: MookieOrdersComponent, canActivate: [AuthGuard] },
  { path: 'facebook/:token', component: MookieFacebookComponent },
  { path: 'facebook/error', component: MookieFacebookComponent },
  { path: 'google/:token', component: MookieGoogleComponent },
  { path: 'google/error', component: MookieGoogleComponent },
  { path: 'activate/:token', component: MookieActivateComponent },
  {
    path: 'management', component: MookieManageComponent, canActivate: [AdminGuard],
    children: [{
      path: 'users',
      component: MookieManageUsersComponent,
      canActivate: [AdminGuard]
    },
    {
      path: 'currentorders',
      component: MookieManageOrdersComponent,
      canActivate: [AdminGuard],
      children: [
        {
          path: 'order/:orderId',
          component: MookieManageOrderComponent,
          canActivate: [AdminGuard]
        }
      ]
    },
    {
      path: 'inventory',
      component: MookieManageInventoryComponent,
      canActivate: [AdminGuard]
    },
    {
      path:'press',
      component:MookieManagePrComponent,
      canActivate:[AdminGuard]
    }
    ]
  },
  {
    path: 'press', component: MookiePressComponent,
    children: [
      { path: 'prs/:prid', component: MookiePrComponent }
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

