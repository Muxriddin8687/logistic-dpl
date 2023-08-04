import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  today = new Date();

  loginFormGroup = this._formBuilder.group({
    first_name: ['', [ Validators.required, Validators.minLength(7) ]],
    email: ['', [ Validators.required, Validators.minLength(5), Validators.email ]],
  });


  constructor(private _formBuilder: FormBuilder, private router: Router, private _auth: AuthService) {}


  send() {
    const loginData = {
        first_name: this.loginFormGroup.value.first_name,
        email: this.loginFormGroup.value.email
    };

    this._auth.login(loginData).subscribe((res) => {
      this.router.navigateByUrl('user');
      sessionStorage.setItem('dpl_user_token', (this.today.getUTCMilliseconds()).toString() );
    });
  }
}
