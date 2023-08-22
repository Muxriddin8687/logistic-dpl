import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/core/models/car.model';
import { AutoQuoteService } from 'src/app/core/services/auto-quote.service';
import { CarsService } from 'src/app/core/services/cars.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-auto-quote',
  templateUrl: './my-auto-quote.component.html',
  styleUrls: ['./my-auto-quote.component.scss']
})
export class MyAutoQuoteComponent {
  api = environment.api + 'auto/';
  quoteList: any = signal([]);

  autoForm: FormGroup = this._fb.group({
    id: ['', Validators.required],
    from: ['', Validators.required],
    to: ['', Validators.required],
    truck_type: ['', Validators.required],
    pickup_date: ['', Validators.required],
    make: ['', Validators.required],
    model: ['', Validators.required],
    type: ['', Validators.required],
    year: ['', Validators.required],
    custom_id: ['', [Validators.required, Validators.minLength(2)]],
    delivery_date: ['', Validators.required],
    total_price: ['', [Validators.required, Validators.minLength(2)]],
    deposite_price: ['', [Validators.required, Validators.minLength(2)]],
    first_name: [''],
    last_name: [''],
    email: [''],
    phone: [''],
    address: [''],
    client_comment: ['', [Validators.required, Validators.minLength(2)]],
    admin_comment: ['', [Validators.required, Validators.minLength(2)]],

    pickup_address: [''],
    delivery_address: [''],
    person_1: [''],
    phone_1: [''],
    person_2: [''],
    phone_2: [''],
    vin: [''],
    lot: [''],
  });
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

  constructor(
    private _http: HttpClient,
    private _fb: FormBuilder,
    private _carService: CarsService,
    private _autoQuote: AutoQuoteService) {

    this.load();
  }


  selectQuote(id: number) {
    let find = this.quoteList().find((item: any) => item.id == id);

    this.autoForm.patchValue({
      id: find['id'],
      from: find['from'],
      to: find['to'],
      truck_type: find['truck_type'],
      pickup_date: find['pickup_date'],
      make: find['make'],
      model: find['model'],
      type: find['type'],
      year: find['year'],
      custom_id: find['custom_id'],
      delivery_date: find['delivery_date'],
      total_price: find['total_price'],
      deposite_price: find['deposite_price'],
      first_name: find['first_name'],
      last_name: find['last_name'],
      email: find['email'],
      phone: find['phone'],
      address: find['address'],
      client_comment: find['client_comment'],
      admin_comment: find['admin_comment']
    });
  }


  send() {
    this._autoQuote
      .update(this.autoForm.value)
      .subscribe((res) => this.load());

    this._autoQuote.setStatus(this.autoForm.value.id, 3).subscribe();
  }


  delete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._http
          .delete(this.api + 'delete.php?id=' + id)
          .subscribe(() => this.load());
        Swal.fire(
          'Deleted!',
          'Order has been deleted.',
          'success'
        );
      }
    });
  }



  load() {
    this._autoQuote
      .getStatus_2_3()
      .subscribe(res => this.quoteList.set(res));
    this.car = this._carService.getCars();
    this.model = this._carService.getModels();
    this.type = this._carService.getTypes();
  }





  findCityByZipCodeFrom(zip_code: string) {
    this._http.get('https://ziptasticapi.com/' + zip_code)
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
    this._http.get('https://ziptasticapi.com/' + zip_code)
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