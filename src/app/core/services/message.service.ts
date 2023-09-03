import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private telegram_api = environment.telegram_api;
  private email_api = environment.email_api;
  private headers = new HttpHeaders()
    .set('content-type', 'application/x-www-form-urlencoded')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private _http: HttpClient) { }

  sendSms(data: any, chanel: string): Observable<any> {
    // return this._http.get<any>(`${this.telegram_api}${chanel}&text=${data}`, { 'headers': this.headers })
    return this._http.get<any>(`${this.telegram_api}aMh0bhF6Ug44YjRi&text=${data}`, { 'headers': this.headers })
      .pipe(
        debounceTime(5000),
        distinctUntilChanged()
      );
  }


  sendEmail(subject: any, text: string): Observable<any> {
    return this._http.get<any>(`${this.email_api}&subject=${subject}&bodyText=${text}`)
      .pipe(
        debounceTime(5000),
        distinctUntilChanged()
      );
  }
}
