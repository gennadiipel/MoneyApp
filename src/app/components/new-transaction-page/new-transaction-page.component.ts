import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TransactionsSevice } from 'src/app/shared/services/transactions.service';
import { Transaction } from 'src/app/shared/interfaces/transaction.interface';

@Component({
  selector: 'app-new-transaction-page',
  templateUrl: './new-transaction-page.component.html',
  styleUrls: ['./new-transaction-page.component.sass']
})
export class NewTransactionPageComponent implements OnInit {

  @ViewChild('newTransactionFormVC') newTransactionFormVC

  newTransactionForm: FormGroup
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: string[] = []
  sending: boolean = false
  isIncome: boolean = true

  constructor(
    private _matSnackbar: MatSnackBar,
    private _transactionsService: TransactionsSevice
  ) { }



  ngOnInit(): void {
    this.newTransactionForm = new FormGroup({
      'title': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]),
      'amount': new FormControl('', [Validators.required]),
      'date': new FormControl('', Validators.required),
      'tagName': new FormControl('')
    })
  }

  addTag(event: MatChipInputEvent): void {
    if ((event.value || '').trim() && this.tags.length < 3) {
      this.tags.push(event.value.trim())
    } else {
      this._matSnackbar.open('Empty tag or reached maximum count of tags: 3', '', { duration: 3000 })
    }

    if (event.input) {
      event.input.value = ''
    }

  }

  removeTag(tag) {
    this.tags = this.tags.filter(t => t != tag)
  }

  addTransaction() {
    if (!this.newTransactionForm.valid) {
      return null
    }

    let tempFormValues = this.newTransactionForm.value
    delete tempFormValues.tagName

    const transaction: Transaction = {
      ...tempFormValues,
      tags: this.tags,
      isIncome: this.isIncome
    }

    this.sending = true

    this._transactionsService.add(transaction)
      .subscribe(response => {
        this.tags = []
        this.newTransactionFormVC.resetForm()
        this.sending = false

        this._matSnackbar.open('New transaction added!', '', { duration: 3000 })
      })
  }

}
