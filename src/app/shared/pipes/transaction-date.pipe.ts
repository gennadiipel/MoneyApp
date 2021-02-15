import { Pipe, PipeTransform } from '@angular/core';

import {DatePipe} from '@angular/common'

@Pipe({
  name: 'appDate'
})
export class TransactionDatePipe implements PipeTransform {

  constructor(
    private _datePipe: DatePipe
  ) {}

  transform(dateString: string): string {
    const date = new Date(dateString)
    if (new Date().getDate() == date.getDate()) return 'Today'
    else if (new Date().getDate() - 1 == date.getDate()) return 'Yesterday'
    else return this._datePipe.transform(date, "dd.MM.yyyy")
  }

}
