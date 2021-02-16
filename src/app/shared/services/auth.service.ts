import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, throwError } from "rxjs";
import { User } from "../interfaces/user.interface";

import { catchError, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";


@Injectable({providedIn: 'root'})

export class AuthService {

  public error$: Subject<string> = new Subject<string>();

  constructor(
    private _httpClient: HttpClient,
  ) { }


  get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp'))
    if (expDate < new Date()) {
      this.logout()
      return null
    }

    return localStorage.getItem('fb-token')
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true
    return this._httpClient.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.fbAPIKey}`, user)
      .pipe(
        tap(this._setToken),
        catchError(this._handleError.bind(this))
      )
  }

  logout() {
    this._setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private _setToken(response: any): void {
    if (response) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }
  }

  private _handleError(error: HttpErrorResponse) {
    const { message } = error.error.error

    switch (message) {
      case 'EMAIL_NOT_FOUND':
        this.error$.next('No such email')
        break
      case 'INVALID_EMAIL':
        this.error$.next('Wrong email')
        break
      case 'INVALID_PASSWORD':
        this.error$.next('Wrong password')
        break
    }


    return throwError(error)
  }
}