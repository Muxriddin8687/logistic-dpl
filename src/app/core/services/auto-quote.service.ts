import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutoQuoteService {
  private api: string = environment.api + 'auto/';

  constructor(private _http: HttpClient) { }

  insert(data: any) {
    return this._http.post(this.api + 'insert.php', data);
  }

  getStatus_0_1() {
    return this._http.get(this.api + 'getStatus_0_1.php');
  }

  getStatus_0_1_byId(id: number) {
    return this._http.get(this.api + 'getStatus_0_1_byId.php?id=' + id);
  }

  getStatus_2_3() {
    return this._http.get(this.api + 'getStatus_2_3.php');
  }

  getStatus_2_3_byId(id: number) {
    return this._http.get(this.api + 'getStatus_2_3_byId.php?id=' + id);
  }

  getStatus_4() {
    return this._http.get(this.api + 'getStatus_4.php');
  }

  getStatus_4_byId(id: number) {
    return this._http.get(this.api + 'getStatus_4_byId.php?id=' + id);
  }

  getStatus_5() {
    return this._http.get(this.api + 'getStatus_5.php');
  }

  getStatus_5_byId(id: number) {
    return this._http.get(this.api + 'getStatus_5_byId.php?id=' + id);
  }

  getStatus_6() {
    return this._http.get(this.api + 'getStatus_6.php');
  }

  getStatus_6_byId(id: number) {
    return this._http.get(this.api + 'getStatus_6_byId.php?id=' + id);
  }

  delete(id: number) {
    return this._http.delete(this.api + 'delete.php?id=' + id);
  }

  update(data: any) {
    return this._http.post(this.api + 'update.php', data);
  }

  setStatus(id: number, status: number) {
    return this._http.get(this.api + 'setStatus.php?id=' + id + '&status=' + status);
  }

}
