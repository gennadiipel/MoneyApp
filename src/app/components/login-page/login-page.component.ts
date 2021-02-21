import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/interfaces/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {


  loginForm: FormGroup
  isFormSending: boolean = false

  authErrorSubscription: Subscription

  constructor(
    private _authService: AuthService,
    private _matSnackBar: MatSnackBar,
    private _router: Router
  ) { }

  ngOnInit(): void {

    if (this._authService.isAuthenticated()) {
      this._router.navigate(['/'])
    }

    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    })

    this.authErrorSubscription = this._authService.error$.subscribe(error => {
      this._matSnackBar.open(error, '', { duration: 5000 })
    })
  }

  submit(): void {
    if (this.loginForm.invalid) {
      return
    }

    this.isFormSending = true
    const user: User = { ...this.loginForm.value }
    this._authService.login(user)
      .subscribe(response => {
        this.isFormSending = false
        this._router.navigate(['/'])
      }, () => {
        this.isFormSending = false
      })
  }

}
