import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserComponent } from '../user/user.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateUserGuard implements CanDeactivate<UserComponent> {
  canDeactivate(component: UserComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.canDeactivate();
  }
  
  
}
