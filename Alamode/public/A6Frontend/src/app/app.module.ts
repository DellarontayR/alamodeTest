import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MookieHeaderComponent } from './components/mookie-header/mookie-header.component';
import { MookieFooterComponent } from './components/mookie-footer/mookie-footer.component';
import { MookieHomeComponent } from './components/mookie-home/mookie-home.component';
import { MookiePagenotfoundComponent } from './components/mookie-pagenotfound/mookie-pagenotfound.component';
import { MookieSocialComponent } from './components/mookie-social/mookie-social.component';

@NgModule({
  declarations: [
    AppComponent,
    MookieHeaderComponent,
    MookieFooterComponent,
    MookieHomeComponent,
    MookiePagenotfoundComponent,
    MookieSocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
