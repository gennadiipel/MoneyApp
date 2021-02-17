import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/interfaces/transaction.interface';
import { TransactionsSevice } from 'src/app/shared/services/transactions.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.sass']
})
export class ExpensesComponent implements OnInit {

  transactions: Transaction[]

  constructor(
    private _transactionsService: TransactionsSevice
  ) { }

  ngOnInit(): void {
    this._transactionsService.get(false)
    .subscribe(response => {
      this.transactions = response
    })
  }

}
