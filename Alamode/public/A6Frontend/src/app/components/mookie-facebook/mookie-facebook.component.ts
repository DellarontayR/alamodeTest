import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute, ParamMap } from '@angular/router';
import { filter, switchMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mookie-facebook',
  templateUrl: './mookie-facebook.component.html',
  styleUrls: ['./mookie-facebook.component.scss']
})
export class MookieFacebookComponent implements OnInit {
  errorMsg: String;
  expired: Boolean;
  routeToken$: Observable<any>

  constructor(private router: Router, private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart)
      ).subscribe((route: ActivatedRoute) => {
        let url = route.url.toString();
        console.log(url);
        console.log(route);
        route.url.subscribe(data => {
          console.log(data);
          console.log(data.toString());
          console.log('herrre');
          if (data.toString().startsWith('/facebook') && data.toString() !== '/facebook/error') {
            this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
              this.authService.socialMedia(params.get('token'));
              this.errorMsg = "You're facebook login was successful";
              setTimeout(() => {
                this.router.navigate(['/home']);
                // Display page from preloader in one and half seconds
              }, 1500);
            });
          }
          else if (data.toString() === '/facebook/error') {
            this.errorMsg = "There was an error trying to login through facebook";
            setTimeout(() => {
              this.router.navigate(['/home']);
              // Display page from preloader in one and half seconds
            }, 1500);
          }
        });


      });
  }

}

// var app = this;
// app.errorMsg = false; // Clear errorMsg on page load
// app.expired = false; // Clear expired on page load
// app.disabled = true; // On page load, remove disable lock from form
// // Check if callback was successful 
// if ($window.location.pathname == '/facebookerror') {
//   $scope.alert = 'alert alert-danger'; // Set class for message
//   app.errorMsg = 'Facebook e-mail not found in database.'; // If error, display custom message
// } else if ($window.location.pathname == '/facebook/inactive/error') {
//   app.expired = true; // Variable to activate "Resend Link Button"
//   $scope.alert = 'alert alert-danger'; // Set class for message
//   app.errorMsg = 'Account is not yet activated. Please check your e-mail for activation link.'; // If error, display custom message
// }
// else {
//   Auth.socialMedia($routeParams.token); // If no error, set the token
//   $location.path('/account'); // Redirect to home page
// }