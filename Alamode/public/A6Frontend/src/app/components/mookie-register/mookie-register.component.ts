import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mookie-register',
  templateUrl: './mookie-register.component.html',
  styleUrls: ['./mookie-register.component.scss']
})
export class MookieRegisterComponent implements OnInit {

  constructor(private userService: UserService, private authService: AuthService, private shared: SharedService, private router: Router) { }

  ngOnInit() {

  }
  loginData = { password: '', email: '' };
  regData = { username: '', password: '', email: '' };

  loginMessage = false;
  regMessage = false;
  regMsg = "";
  loginMsg = "";
  username = "";
  loggedIn = false;
  chooseLogin = true;
  chooseReg = false;

  switchToReg = function () {
    this.chooseLogin = false;
    this.chooseReg = true;
  }
  switchToLogin = function () {
    this.chooseReg = false;
    this.chooseLogin = true;
  }

  mookieLogin = function (loginData) {
    console.log(loginData);
    console.log(this.loginData);
    this.loginMessage = false;
    this.authService.login(loginData).subscribe(data => {
      if (data.success) {
        this.loginMessage = true;
        this.loginMsg = "User authentication successfull";
        this.username = data.token;
        this.loggedIn = true;
        this.authService.setToken(data.token);
        this.shared.updateSharedVar('loggedIn', true);
        if(this.shared.getSharedVar('checkingSession')) this.shared.updateSharedVar('checkingSession',true);
        setTimeout(() => {
          this.loginMessage = false;
          this.loginMsg = "";
          this.router.navigate(['/account']);
        }, 2000);
      }
      else {
        this.loginMessage = true;
        if (data.message) {
          this.loginMsg = data.message;
        }
        else {
          this.loginMsg = "User could not be logged in.";
        }
      }
    })
  };

  mookieLogout = function () {
    this.authService.logout();
  };

  mookieRegister = function (regData) {
    this.userService.registerMookie(regData).subscribe(data => {
      if (data.success) {
        this.username = regData.username;
        this.authService.login(this.regData).subscribe(tokenData => {
          this.regMessage = true;
          this.regMsg = "Sign up was successful. Make sure to look out for a verification email";
          this.loggedIn = true;

          this.authService.setToken(tokenData.token);
          this.shared.updateSharedVar('loggedIn', true);
          if(this.shared.getSharedVar('checkingSession')) this.shared.updateSharedVar('checkingSession',true);

          setTimeout(() => {
            this.regMessage = false;
            this.regMsg = "";
            this.router.navigate(['/account']);
            // Add check at account to tell user if they have not activated their account
          }, 2000);
        });
      }
      else {
        this.regMessage = true;
        if (data.message) {
          this.regMsg = data.message;
        }
        else {
          this.regMsg = "User could not be Registered a this time. Try again later."
        }
      }
    });
  };
}
