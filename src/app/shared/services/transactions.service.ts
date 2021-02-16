import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Transaction } from "../interfaces/transaction.interface";

@Injectable({providedIn: 'root'})
export class TransactionsSevice {

    constructor(
        private _httpClient: HttpClient
    ) {}

    add(transaction: Transaction): Observable<Transaction> {
        return this._httpClient.post<Transaction>(`${environment.fbBaseHost}/transactions.json`, transaction)
    }

}