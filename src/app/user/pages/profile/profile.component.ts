import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  _router = inject(Router);
  _fb = inject(FormBuilder);
  _http = inject(HttpClient);
  _authService = inject(AuthService);

  api = environment.api + 'client/';
  user = this._fb.group({
    id: [0],
    first_name: ['', [Validators.required, Validators.minLength(3)]],
    last_name: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email, Validators.minLength(7)]],
    phone: ['', [Validators.required, Validators.minLength(7)]]
  });

  ngOnInit() {
    this.load();
  }

  load() {
    const id = this._authService.getUserId();

    this._http
      .get(this.api + 'getOne.php?id=' + id)
      .subscribe((res: any) => {
        this.user.patchValue({
          id: res.id,
          first_name: res.first_name,
          last_name: res.last_name,
          address: res.address,
          email: res.email,
          phone: res.phone
        });
      });
  }

  send() {
    this._http
      .post(this.api + 'insert.php', this.user.value)
      .subscribe(() => {
        Swal.fire('Saved', '', 'success');
        this.load();
      });
  }
}
