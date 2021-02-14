import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  

  logout(): void {
    this.authService.logout()
    this._router.navigate(['/login'])
  }

}
