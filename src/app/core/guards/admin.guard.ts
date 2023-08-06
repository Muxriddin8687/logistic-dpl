import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';


@Injectable()
export class AdminGuard implements CanLoad {

  constructor(private _router: Router) { }

  canLoad() {
    let data = sessionStorage.getItem('dpl_admin');

    if (data != null && data?.length > 5)
      return true;
    else {
      this._router.navigateByUrl('/auth/admin');
      return false;
    }
  }
}