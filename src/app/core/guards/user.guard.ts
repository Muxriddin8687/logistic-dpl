import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';


@Injectable()
export class UserGuard implements CanLoad {

  constructor(private _router: Router) { }

  canLoad() {
    let data = sessionStorage.getItem('dpl_client');

    if (data != undefined && data != null && data?.length > 5)
      return true;
    
    this._router.navigate(['/auth/login']);
    return false;
  }
}