import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';


@Injectable()
export class AdminGuard implements CanLoad {

  constructor(private _router: Router) { }

  canLoad() {
    let token = sessionStorage.getItem('dpl_admin_token');

    if (token != null && token?.length > 5)
      return true;
    else {
      this._router.navigateByUrl('/');
      return false;
    }
  }
}