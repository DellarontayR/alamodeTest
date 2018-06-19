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




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MookieHomeComponent },
  { path: 'menu', component: MookieMenuComponent },
  {path:'about', component: MookieAboutComponent},
  { path: 'thesecret', component: MookieSocialComponent },
  { path: 'register', component: MookieRegisterComponent },
  { path:'account', component: MookieAccountComponent},
  { path: "**", component: MookiePagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

