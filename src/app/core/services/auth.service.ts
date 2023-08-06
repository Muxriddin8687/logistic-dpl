import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = environment.api;
  user_id: any = undefined;
  user: any;

  constructor(private _http: HttpClient, private _router: Router) { }

  login(data: any) {
    return this._http.post(this.url + 'auth/signIn.php', data);
  }

  signUp(data: any) {
    return this._http.post(this.url + 'client/insert.php', data);
  }

  loginAdmin(data: any) {
    return this._http.post(this.url + 'auth/login.php', data);
  }

  getUserData() {
    let data = sessionStorage.getItem('dpl_client');

    if (data != undefined)
      data = JSON.parse(data);
    else
      this._router.navigateByUrl('/');

    return data;
  }


  getUserId() {
    let data: any = sessionStorage.getItem('dpl_client');

    if (data != undefined)
      data = JSON.parse(data);
    else
      this._router.navigateByUrl('/');

    return data?.id;
  }
}
