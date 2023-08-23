import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/core/models/car.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { AutoQuoteService } from 'src/app/core/services/auto-quote.service';
import { CarsService } from 'src/app/core/services/cars.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent {
  today = new Date();
  api = environment.api + 'auto/';
  quoteList: any = signal([]);
  user_id = this._authService.getUserId();

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
    client_comment: ['', Validators.required],
    admin_comment: ['', [Validators.required, Validators.minLength(2)]],
    pickup_address: ['', [Validators.required, Validators.minLength(2)]],
    delivery_address: ['', [Validators.required, Validators.minLength(2)]],
    person_1: ['', [Validators.required, Validators.minLength(2)]],
    phone_1: ['', [Validators.required, Validators.minLength(2)]],
    person_2: ['', [Validators.required, Validators.minLength(2)]],
    phone_2: ['', [Validators.required, Validators.minLength(2)]],
    vin: ['', [Validators.required, Validators.minLength(2)]],
    lot: ['', [Validators.required, Validators.minLength(2)]],
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
    private _authService: AuthService,
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
      admin_comment: find['admin_comment'],
      pickup_address: find['pickup_address'],
      delivery_address: find['delivery_address'],
      person_1: find['person_1'],
      phone_1: find['phone_1'],
      person_2: find['person_2'],
      phone_2: find['phone_2'],
      vin: find['vin'],
      lot: find['lot']
    });
  }


  send() {
    this._autoQuote
      .update(this.autoForm.value)
      .subscribe((res) => this.load());

    this._autoQuote
      .setStatus(this.autoForm.value.id, 6)
      .subscribe();

    Swal.fire({
      icon: 'success',
      title: 'Your order has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }



  exportToPDF() {
    let DATA: any = document.getElementById('invoice');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('invoice.pdf');
    });
  }




  load() {
    this._autoQuote
      .getStatus_5_byId(this.user_id)
      .subscribe(res => this.quoteList.set(res));
    this.car = this._carService.getCars();
    this.model = this._carService.getModels();
    this.type = this._carService.getTypes();
  }

}