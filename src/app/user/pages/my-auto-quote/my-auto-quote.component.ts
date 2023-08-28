import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { AutoQuoteService } from 'src/app/core/services/auto-quote.service';
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
  user_id = this._authService.getUserId();

  autoForm: FormGroup = this._fb.group({
    id: ['', Validators.required],
    status: [0],

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
    admin_comment: [''],

    client_comment: [''],
    pickup_address: ['', Validators.required],
    delivery_address: ['', Validators.required],
    person_1: ['', Validators.required],
    phone_1: ['', Validators.required],
    person_2: ['', Validators.required],
    phone_2: ['', Validators.required],
    vin: [''],
    lot: [''],
  });


  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _autoQuote: AutoQuoteService) {

    this.load();

    setInterval(() => this.load(), 5000);
  }


  selectQuote(id: number) {
    let find = this.quoteList().find((item: any) => item.id == id);
    this._autoQuote.selectedOrder.set(find);
    this._autoQuote.setClientRead(id).subscribe();

    this.autoForm.patchValue({
      id: find['id'],
      status: find['status'],
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
      admin_comment: find['admin_comment'],
      client_comment: find['client_comment'],
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
      .setStatus(this.autoForm.value.id, 2)
      .subscribe();

    this._autoQuote.setAdminNoRead(this.autoForm.value.id).subscribe();

    Swal.fire({
      icon: 'success',
      title: 'Your order has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }


  delete(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._autoQuote
          .delete(id)
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
      .getOrderById(this.user_id)
      .subscribe(res => this.quoteList.set(res));
  }


  goToInvoicePage() {
    this._router.navigateByUrl('/user/invoice');
  }

}