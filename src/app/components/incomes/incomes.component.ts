import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/interfaces/transaction.interface';
import { TransactionsSevice } from 'src/app/shared/services/transactions.service';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.sass']
})
export class IncomesComponent implements OnInit {

  transactions: Transaction[]

  constructor(
    private _transactionsService: TransactionsSevice
  ) { }

  ngOnInit(): void {
    this._transactionsService.get()
    .subscribe(response => {
      this.transactions = response
    })
  }

}
