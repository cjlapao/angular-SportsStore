import { StoreComponent } from './store.component';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class StoreFirstGuard {
  private firstNavigation = true;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component !== StoreComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  }
}
