import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/core/models/car.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { AutoQuoteService } from 'src/app/core/services/auto-quote.service';
import { CarsService } from 'src/app/core/services/cars.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-auto-quote',
  templateUrl: './get-auto-quote.component.html',
  styleUrls: ['./get-auto-quote.component.scss']
})
export class GetAutoQuoteComponent {
  defult = {
    "country": ".",
    "state": ".",
    "city": "Loading..."
  };

  searchResultFrom: any = signal(this.defult);
  searchResultTo: any = signal(this.defult);

  car: Observable<CarModel[]> = new Observable<CarModel[]>();
  model: Observable<any> = new Observable();
  type: Observable<any> = new Observable();

  constructor(private http: HttpClient,
              private carService: CarsService,
              private _authService: AuthService,
              private _autoQuote: AutoQuoteService)
  {
    this.load();
  }


  load() {
    this.car = this.carService.getCars();
    this.model = this.carService.getModels();
    this.type = this.carService.getTypes();
  }



  send(form: NgForm) {

    if (form.valid) {

      let data = {
        from: form.value.from,
        to: form.value.to,
        truck_type: form.value.type,
        pickup_date: form.value.date,
        make: form.value.make,
        model: form.value.model,
        type: form.value.type,
        year: form.value.year,
        client_id: this._authService.getUserId()
      };

      this._autoQuote.insert(data).subscribe((res) => {
        if (res == true) {
          Swal.fire('Thank you', 'Your message has been sent successfully and we will contact you shortly.', 'success');
          form.onReset();
        } else
          Swal.fire('Error', 'Try again', 'warning');
      });
    }
  }


  findCityByZipCodeFrom(zip_code: string) {
    this.http.get('https://ziptasticapi.com/' + zip_code)
      .subscribe(
        (res: any) => {
          if (res.error)
            this.searchResultFrom.set(this.defult);
          else
            this.searchResultFrom.set(res);
        },
        (err) => { }
      );
  }


  findCityByZipCodeTo(zip_code: string) {
    this.http.get('https://ziptasticapi.com/' + zip_code)
      .subscribe(
        (res: any) => {
          if (res.error)
            this.searchResultTo.set(this.defult);
          else
            this.searchResultTo.set(res);
        },
        (err) => { }
      );
  }
}
