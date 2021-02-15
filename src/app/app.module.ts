import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialSharedModule } from './shared/modules/material-shared.module';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './shared/guards/auth.guard';
import { FlexModule } from '@angular/flex-layout';
import { TransactionItemComponent } from './components/transaction-item/transaction-item.component';
import { IncomesComponent } from './components/incomes/incomes.component';
import { NewTransactionPageComponent } from './components/new-transaction-page/new-transaction-page.component';
import { ExpensesComponent } from './components/expenses/expenses.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    LoginPageComponent,

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
    FlexModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
