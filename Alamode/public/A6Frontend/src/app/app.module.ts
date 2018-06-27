import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MookieHeaderComponent } from './components/mookie-header/mookie-header.component';
import { MookieFooterComponent } from './components/mookie-footer/mookie-footer.component';
import { MookieHomeComponent } from './components/mookie-home/mookie-home.component';
import { MookiePagenotfoundComponent } from './components/mookie-pagenotfound/mookie-pagenotfound.component';
import { MookieSocialComponent } from './components/mookie-social/mookie-social.component';
import { AuthService } from './services/auth.service';

import * as $ from 'jquery';
import { MookieRegisterComponent } from './components/mookie-register/mookie-register.component';
import { FormsModule } from '@angular/forms';
import { MookieMenuComponent } from './components/mookie-menu/mookie-menu.component';
import { MookieAboutComponent } from './components/mookie-about/mookie-about.component';
import { MookieCheckoutComponent } from './components/mookie-checkout/mookie-checkout.component';
import { MookieCartComponent } from './components/mookie-cart/mookie-cart.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MookiePreloaderComponent } from './components/mookie-preloader/mookie-preloader.component';
import { MookieAccountComponent } from './components/mookie-account/mookie-account.component';

import { NgxStripeModule } from 'ngx-stripe'

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MookieOrdersComponent } from './components/mookie-orders/mookie-orders.component';
import { MookieManageComponent } from './components/mookie-manage/mookie-manage.component';
import { MookieManageUsersComponent } from './components/mookie-manage-users/mookie-manage-users.component';
import { MookieManageOrdersComponent } from './components/mookie-manage-orders/mookie-manage-orders.component';
import { MookieManageInventoryComponent } from './components/mookie-manage-inventory/mookie-manage-inventory.component';
import { MookieManageOrderComponent } from './components/mookie-manage-order/mookie-manage-order.component';
import { MookieModalComponent } from './components/mookie-modal/mookie-modal.component';
import { MookieFacebookComponent } from './components/mookie-facebook/mookie-facebook.component';
import { MookieGoogleComponent } from './components/mookie-google/mookie-google.component';
import { MookieActivateComponent } from './components/mookie-activate/mookie-activate.component';


@NgModule({
  declarations: [
    AppComponent,
    MookieHeaderComponent,
    MookieFooterComponent,
    MookieHomeComponent,
    MookiePagenotfoundComponent,
    MookieSocialComponent,
    MookieRegisterComponent,
    MookieMenuComponent,
    MookieAboutComponent,
    MookieCheckoutComponent,
    MookieCartComponent,
    MookiePreloaderComponent,
    MookieAccountComponent,
    MookieOrdersComponent,
    MookieManageComponent,
    MookieManageUsersComponent,
    MookieManageOrdersComponent,
    MookieManageInventoryComponent,
    MookieManageOrderComponent,
    MookieModalComponent,
    MookieFacebookComponent,
    MookieGoogleComponent,
    MookieActivateComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      libraries: ["places"],
      apiKey: "AIzaSyDIK5nijNemroAnlHUxH6iElr3HVBtniH4"
    }),
    NgxStripeModule.forRoot('pk_live_Ic6zEI8pzoofTRtAleNB1q0v'),
    NgbModule.forRoot(),
  ],
  entryComponents: [
    MookieModalComponent
  ], providers: [AuthService, { provide: HTTP_INTERCEPTORS, useClass: AppComponent, multi: true }, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
