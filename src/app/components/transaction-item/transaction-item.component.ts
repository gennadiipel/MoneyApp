import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Transaction } from 'src/app/shared/interfaces/transaction.interface';
import { TransactionsSevice } from 'src/app/shared/services/transactions.service';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.sass'],
  animations: [
    trigger('deleteTransactionAnimation', [
      state('deleted', style({
        transform: 'translateX(-40%)',
        opacity: 0
      })),
      transition('* => deleted', animate(400))
    ])
  ]
})
export class TransactionItemComponent implements OnInit {

  deleteAnimationState: string = ''
  @Input() transaction: Transaction
  @Output('delete') onDeleted: EventEmitter<Transaction> = new EventEmitter<Transaction>()
  
  date = new Date()
  deleting: boolean = false

  constructor(
    private _transactionsService: TransactionsSevice 
  ) { }

  ngOnInit(): void {
  }

  deleteTransaction() {
    this.deleting = true

    this._transactionsService.delete(this.transaction.key)
    .subscribe(() => {
      this.deleteAnimationState = 'deleted'
    })

  }

  onAnimationDone(event: AnimationEvent) {
    if (event.toState == 'deleted') {
      this.onDeleted.emit(this.transaction)
    }
  }

}
