import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2'

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb          = inject( FormBuilder );
  private authService = inject(AuthService);
  private router      = inject(Router);

  public myForm: FormGroup = this.fb.group({
    email:  ['1fabrg90@gmail.com', [Validators.required, Validators.email]],
    password:  ['123456', [Validators.required, Validators.minLength(6)  ]],
  })


  login() {
    const {email, password} = this.myForm.value;

    this.authService.login(email, password)
    .subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),
      error: (errMessage) => {
        Swal.fire('Error', errMessage, 'error')
      }

    })

  }

}
