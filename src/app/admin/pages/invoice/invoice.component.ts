import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
import { Component, inject, signal } from '@angular/core';
import { AutoQuoteService } from 'src/app/core/services/auto-quote.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {
  private _router = inject(Router);
  private _autoQuoteService = inject(AutoQuoteService);

  orderInvoice: any = signal({});

  ngOnInit() {
    this.orderInvoice.set(this._autoQuoteService.selectedOrder());

    if (this.orderInvoice().client_id == undefined)
      this._router.navigateByUrl('/admin/get-auto-quote');
  }


  exportToPDF() {
    let DATA: any = document.getElementById('invoice') as HTMLElement;
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
}
