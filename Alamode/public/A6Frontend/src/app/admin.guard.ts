import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userService:UserService){}
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
