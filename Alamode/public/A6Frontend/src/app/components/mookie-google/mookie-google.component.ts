import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationStart, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MookieEmitService } from '../../services/mookie-emit.service';

@Component({
  selector: 'app-mookie-google',
  templateUrl: './mookie-google.component.html',
  styleUrls: ['./mookie-google.component.scss']
})
export class MookieGoogleComponent implements OnInit {
  errorMsg: String;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService, private mookieEmit: MookieEmitService) { }

  ngOnInit() {
    let route = this.router.url;
    if (route.startsWith('/google') && route !== '/google/error') {
      this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
        this.authService.socialMedia(params.get('token'));
        this.errorMsg = "You're google login was successful";
        setTimeout(() => {
          this.mookieEmit.emitSessionChange();
          this.router.navigate(['/home']);
          // Display page from preloader in one and half seconds
        }, 1500);
      });
    }
    else if (route.toString() === '/google/error') {
      this.errorMsg = "There was an error trying to login through google";
      setTimeout(() => {
        this.router.navigate(['/home']);
        // Display page from preloader in one and half seconds
      }, 1500);
    }
  }

}
