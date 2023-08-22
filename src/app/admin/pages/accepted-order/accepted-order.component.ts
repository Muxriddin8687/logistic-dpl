import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoQuoteService } from 'src/app/core/services/auto-quote.service';
import { MessageService } from 'src/app/core/services/message.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accepted-order',
  templateUrl: './accepted-order.component.html',
  styleUrls: ['./accepted-order.component.scss']
})
export class AcceptedOrderComponent {
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

  constructor(
    private _fb: FormBuilder,
    private _smsService: MessageService,
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

    this._autoQuote.setStatus(this.autoForm.value.id, 5).subscribe();

    let data = encodeURI(this.autoForm.value);

    this._smsService.sendEmail('Auto Quote Form from sign-up', data).subscribe(
      (res) => {
        if (res.success == true) {
        } else
          Swal.fire('Error', 'Please try again', 'warning');
      },
      (err) => console.log(err.message)
    );
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
      .getStatus_4()
      .subscribe(res => this.quoteList.set(res));
  }
}