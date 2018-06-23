import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userService:UserService,private router:Router){}
  // Check if user has correct permissions
  check = function (): boolean | Promise<boolean> {

    return this.userService.getPermission().subscribe(data => {
      if (data.permission !== 'admin') {
        this.router.navigate(['/home']);
      }
      return true;
    });
  };


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.check();
  }
}
