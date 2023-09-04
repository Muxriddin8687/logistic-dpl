import { Component, ChangeDetectionStrategy, ViewEncapsulation, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';
declare let mdb: any;

@Component({
  selector: 'app-fixed-buttons',
  templateUrl: './fixed-buttons.component.html',
  styleUrls: ['./fixed-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FixedButtonsComponent {
  public _router = inject(Router);

  loginFormGroup = this._formBuilder.group({
    first_name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.minLength(5), Validators.email]],
  });


  constructor(private _formBuilder: FormBuilder, private router: Router, private _auth: AuthService) { }


  ngAfterViewInit() {
    const myModalEl = document.getElementById('signUpModal');
    const modal = new mdb.Modal(myModalEl);

    setTimeout(() => modal.show(), 40000);

    // setInterval(() => modal.show(), 120000);
  }

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
