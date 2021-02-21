import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
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

    get(isIncomes: boolean = true): Observable<Transaction[]> {
        return this._httpClient.get<Transaction[]>(`${environment.fbBaseHost}/transactions.json`)
        .pipe(
            map((response: {[key: string]: any}) => {
                return (response) ? Object.keys(response)
                .map(key => ({
                    ...response[key],
                    key: key,
                })) : []
            }),
            map((transactions: Transaction[]) => {
                return transactions.filter((transaction: Transaction) => transaction.isIncome == isIncomes).reverse()
            })
        )
        
        
    }

    delete(key: string): Observable<void> {
        return this._httpClient.delete<void>(`${environment.fbBaseHost}/transactions/${key}.json`)
    }

}