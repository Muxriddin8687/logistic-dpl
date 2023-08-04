import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  today = new Date();

  loginFormGroup = this._formBuilder.group({
    login: ['', [ Validators.required, Validators.minLength(7) ]],
    password: ['', [ Validators.required, Validators.minLength(5), Validators.email ]],
  });


  constructor(private _formBuilder: FormBuilder, private router: Router, private _auth: AuthService) {}


  send() {
    const loginData = {
        first_name: this.loginFormGroup.value.login,
        email: this.loginFormGroup.value.password
    };

    this._auth.loginAdmin(loginData).subscribe((res) => {
      this.router.navigateByUrl('admin');
      sessionStorage.setItem('dpl_admin_token', (this.today.getUTCMilliseconds()).toString() );
    });
  }
}
