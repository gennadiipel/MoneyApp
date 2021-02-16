import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-new-transaction-page',
  templateUrl: './new-transaction-page.component.html',
  styleUrls: ['./new-transaction-page.component.sass']
})
export class NewTransactionPageComponent implements OnInit {

  newTransactionForm: FormGroup
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags = []
  constructor() { }



  ngOnInit(): void {
    this.newTransactionForm = new FormGroup({
      'title': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(32)]),
      'amount': new FormControl('', [Validators.required]),
      'date': new FormControl('', Validators.required),
      'addTag': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(32)])
    })
  }

  addTag(event: MatChipInputEvent): void {}
  removeTag(tag: any) {}

}
