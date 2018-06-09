import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MookieHeaderComponent } from './components/mookie-header/mookie-header.component';
import { MookieFooterComponent } from './components/mookie-footer/mookie-footer.component';
import { MookieHomeComponent } from './components/mookie-home/mookie-home.component';
import { MookiePagenotfoundComponent } from './components/mookie-pagenotfound/mookie-pagenotfound.component';
import { MookieSocialComponent } from './components/mookie-social/mookie-social.component';
import {AuthService} from './services/auth.service';

import * as $ from 'jquery';
import { MookieRegisterComponent } from './components/mookie-register/mookie-register.component';
import { FormsModule } from '@angular/forms';
import { MookieMenuComponent } from './components/mookie-menu/mookie-menu.component';
import { MookieAboutComponent } from './components/mookie-about/mookie-about.component';


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
    MookieAboutComponent  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
