import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../../interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.sass']
})
export class TransactionListComponent implements OnInit {

  @Input() transactions: Transaction[]

  constructor() { }

  ngOnInit(): void {
  }

}
