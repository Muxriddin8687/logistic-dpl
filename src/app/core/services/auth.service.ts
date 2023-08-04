import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = '';

  constructor(private _http: HttpClient) { }

  login(data: any) {
    return this._http.post(this.url, data);
  }

  signUp(data: any) {
    return this._http.post(this.url, data);
  }

  loginAdmin(data: any) {
    return this._http.post(this.url, data);
  }
}
