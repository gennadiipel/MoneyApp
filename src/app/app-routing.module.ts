import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { IncomesComponent } from './components/incomes/incomes.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NewTransactionPageComponent } from './components/new-transaction-page/new-transaction-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: '', redirectTo: '/incomes', pathMatch: 'full'},
    {path: '', component: HomePageComponent, canActivate: [AuthGuard], children: [
      {path: 'incomes', component: IncomesComponent},
      {path: 'expenses', component: ExpensesComponent},
      {path: 'add', component: NewTransactionPageComponent},
    ]},
    {path: 'login', component: LoginPageComponent},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
