import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutoQuoteService {
  private url: string = environment.api;

  constructor(private _http: HttpClient) { }

  insert(data: any) {
    return this._http.post(this.url + 'auto/insert.php', data);
  }

  myQuote(id: number) {
    return this._http.get(this.url + 'auto/getMyQuoteByClientId.php?id=' + id);
  }

  setStatus(id: number, status: number) {
    return this._http.get(this.url + 'auto/setStatus.php?id=' + id + '&status=' + status);
  }
}
