import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialSharedModule } from './shared/modules/material-shared.module';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './shared/guards/auth.guard';
import { FlexModule } from '@angular/flex-layout';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { IncomesComponent } from './components/incomes/incomes.component';
import { NewTransactionPageComponent } from './components/new-transaction-page/new-transaction-page.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { TransactionDatePipe } from './shared/pipes/transaction-date.pipe';
import { DatePipe } from '@angular/common';
import { TransactionsSevice } from './shared/services/transactions.service';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';


const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    LoginPageComponent,
    TransactionDatePipe,
    TransactionItemComponent,
    NewTransactionPageComponent,
    IncomesComponent,
    ExpensesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialSharedModule,
    FlexModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    DatePipe,
    TransactionsSevice,
    INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
