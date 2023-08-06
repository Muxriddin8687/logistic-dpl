import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  firstFormGroup = this._formBuilder.group({
    first_name: ['', [Validators.required, Validators.minLength(3)]],
    last_name: ['', [Validators.required, Validators.minLength(3)]],
  });


  secondFormGroup = this._formBuilder.group({
    phone: ['', [Validators.required, Validators.minLength(7)]],
    email: ['', [Validators.required, Validators.minLength(5), Validators.email]],
    address: ['', [Validators.required, Validators.minLength(5)]],
  });


  constructor(private _formBuilder: FormBuilder, private router: Router, private _auth: AuthService) { }


  send() {
    const newUser = {
      id: 0,
      first_name: this.firstFormGroup.value.first_name,
      last_name: this.firstFormGroup.value.last_name,
      phone: this.secondFormGroup.value.phone,
      email: this.secondFormGroup.value.email,
      address: this.secondFormGroup.value.address
    };

    this._auth.signUp(newUser).subscribe((res) => {
      if (res == true) {
        Swal.fire('Thank you', 'You have successfully registered', 'success');
        setTimeout(() => this.router.navigateByUrl('/auth/login'), 1500);
      } else
        Swal.fire('Error', 'Try again!', 'warning');
    });
  }
}
