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
        // set mock user data
        sessionStorage.setItem('dpl_client', JSON.stringify(newUser));
        Swal.fire('Thank you', 'You have successfully registered', 'success');
        setTimeout(() => this.router.navigateByUrl('/user/dashboard'), 1500);

        setTimeout(() => {
          this._auth
            .login({ 'first_name': newUser.first_name, "email": newUser.email })
            .subscribe((res: any) => {
              if (res.length != 0) {
                sessionStorage.setItem('dpl_client', JSON.stringify(res[0]));
              } else
                sessionStorage.clear();
            });
        }, 2000);
      } else
        Swal.fire('Error', 'Try again!', 'warning');
    });
  }
}
