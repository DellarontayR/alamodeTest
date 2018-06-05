import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute, NavigationStart } from '@angular/router';


import { MookieHeaderComponent } from './components/mookie-header/mookie-header.component';
import { MookieFooterComponent } from './components/mookie-footer/mookie-footer.component';
import { MookieHomeComponent } from './components/mookie-home/mookie-home.component';
import { MookiePagenotfoundComponent } from './components/mookie-pagenotfound/mookie-pagenotfound.component';
import { MookieSocialComponent } from './components/mookie-social/mookie-social.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MookieHomeComponent },
  { path: 'thesecret', component: MookieSocialComponent },
  { path: "**", component: MookiePagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

