import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private userService: UserService) { }

  // Check if user has correct permissions
  check = function (): boolean | Promise<boolean> {

    return this.userService.getPermission().subscribe(data => {
      if (data.permission === 'admin') {
        return true;
      }
      else {
        this.router.navigate(['/home']);
        return false;
      }

    });
  };

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.check();

  }
}