import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/app/shared/interfaces/transaction.interface';
import { TransactionsSevice } from 'src/app/shared/services/transactions.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  transactions: Transaction[] = null
  expenses: number = null

  navLinks: any[];
  constructor(
    private _router: Router,
    private _transactionsService: TransactionsSevice
  ) {
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

    this._transactionsService.get(false)
      .subscribe(transactions => {
        this.transactions = transactions.filter(t => !t.isIncome)
        this.transactions.forEach(t => {
          if (new Date(t.date).getMonth() == new Date().getMonth()) {
            this.expenses += t.amount
          }

        })
      })


  }

}
