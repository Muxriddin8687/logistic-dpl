import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutoQuoteService {
  private api: string = environment.api + 'auto/';
  public selectedOrder = signal([]);

  constructor(private _http: HttpClient) { }

  insert(data: any) {
    return this._http.post(this.api + 'insert.php', data);
  }

  getStatus_0_1() {
    return this._http.get(this.api + 'getStatus_0_1.php');
  }

  getStatus_2() {
    return this._http.get(this.api + 'getStatus_2.php');
  }

  getStatus_3() {
    return this._http.get(this.api + 'getStatus_3.php');
  }

  getOrderById(id: number) {
    return this._http.get(this.api + 'getOrderById.php?id=' + id);
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

  setClientRead(order_id: number) {
    return this._http.get(this.api + 'setClientRead.php?id=' + order_id);
  }

  setAdminRead(order_id: number) {
    return this._http.get(this.api + 'setAdminRead.php?id=' + order_id);
  }

  setClientNoRead(order_id: number) {
    return this._http.get(this.api + 'setClientNoRead.php?id=' + order_id);
  }

  setAdminNoRead(order_id: number) {
    return this._http.get(this.api + 'setAdminNoRead.php?id=' + order_id);
  }

}
