import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UsersService } from '../services/Users.service';

@Injectable({
  providedIn: 'root',
})
export class IsUserSelectedGuard implements CanActivate {
  constructor(private userService: UsersService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.userService.getSelectedUser()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
