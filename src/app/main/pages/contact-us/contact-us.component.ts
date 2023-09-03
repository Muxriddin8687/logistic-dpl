import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'src/app/core/services/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  constructor(private _smsService: MessageService) { }

  send(form: NgForm) {
    if (form.valid) {

      let data = 'Contact Us page' +
        '\nName:  ' + form.value.name +
        '\nPhone:  ' + form.value.phone +
        '\nEmail:  ' + form.value.email +
        '\nSubject:  ' + form.value.subject +
        '\nMessage:  ' + form.value.message;

      data = encodeURI(data);

      this._smsService.sendEmail('Contact Us page', data).subscribe(
        (res) => {
          if (res.success == true) {
            this._smsService.sendSms(data, "chanel_name").subscribe();
            Swal.fire('Thank you', 'Your message has been sent successfully and we will contact you shortly.', 'success');
            form.onReset();
          } else
            Swal.fire('Error', 'Please try again', 'warning');
        },
        (err) => console.log(err.message)
      );
    }
  }
}
