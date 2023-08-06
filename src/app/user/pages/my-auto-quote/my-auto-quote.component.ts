import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { AutoQuoteService } from 'src/app/core/services/auto-quote.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-auto-quote',
  templateUrl: './my-auto-quote.component.html',
  styleUrls: ['./my-auto-quote.component.scss']
})
export class MyAutoQuoteComponent {
  quotes: any;

  constructor(private _autoQuote: AutoQuoteService, private _auth: AuthService) {
    this.load();
  }


  load () {
    let client_id = this._auth.getUserId();
    this._autoQuote.myQuote(client_id).subscribe((res) => this.quotes = res);
  }


  acceptedOrder(quote_id: number) {
    this._autoQuote.setStatus(quote_id, 2).subscribe((res) => {
      if (res == true)
        Swal.fire('Thank you', 'Your quote send successfully', 'success');
      else
        Swal.fire('Error', 'Try again', 'warning');
    });
  }
}
