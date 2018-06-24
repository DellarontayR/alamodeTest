import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }
  // Check if user has correct permissions
  check = function () {

    this.userService.getPermission().subscribe(data => {
      console.log(data.permission !== "admin");
      if (data.permission !== "admin") {
        this.router.navigate(['/home']);
      }
    });
  };


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
