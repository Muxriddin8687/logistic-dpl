import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  today = new Date();

  loginFormGroup = this._formBuilder.group({
    first_name: ['', [ Validators.required, Validators.minLength(2) ]],
    email: ['', [ Validators.required, Validators.minLength(5), Validators.email ]],
  });


  constructor(private _formBuilder: FormBuilder, private router: Router, private _auth: AuthService) {}


  send() {
    const loginData = {
        first_name: this.loginFormGroup.value.first_name,
        email: this.loginFormGroup.value.email
    };

    this._auth.login(loginData).subscribe((res: any) => {
      if (res.length != 0) {
        sessionStorage.setItem('dpl_client', JSON.stringify(res[0]));
         this.router.navigateByUrl('user');
      } else
        Swal.fire('Error', 'Try again!', 'warning');
    });
  }
}
