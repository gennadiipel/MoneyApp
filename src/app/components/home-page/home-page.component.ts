import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  selectedMonth: string = 'February'

  navLinks: any[];
  constructor(private _router: Router) {
    this.navLinks = [
        {
            label: 'Incomes',
            link: './incomes',
            index: 0
        }, {
            label: 'Expenses',
            link: './expenses',
            index: 1
        }, {
            label: 'New transaction',
            link: './add',
            index: 2
        }, 
    ];
  }

  ngOnInit(): void {
  }

}
