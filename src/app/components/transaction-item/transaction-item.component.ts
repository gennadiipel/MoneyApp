import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.sass']
})
export class TransactionItemComponent implements OnInit {

  @Input() transaction: Transaction
  
  date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
