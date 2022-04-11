import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfoodComponent } from './addfood/addfood.component';
import { BasketComponent } from './basket/basket.component';
import { DoneComponent } from './done/done.component';
import { ErrorComponent } from './error/error.component';
import { FirstComponent } from './first/first.component';
import { AuthGuard } from './guards/auth.guard';
import { Auth2Guard } from './guards/auth2.guard';
import { LoginComponent } from './login/login.component';
import { ModifyfoodComponent } from './modifyfood/modifyfood.component';
import { RegisterComponent } from './register/register.component';
import { SecondComponent } from './second/second.component';
import { SzallitasComponent } from './szallitas/szallitas.component';

const routes: Routes = [
  {path: '',redirectTo: 'login',pathMatch:'full'},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'first',component: FirstComponent,canActivate:[AuthGuard]},
  {path: 'second',component: SecondComponent,canActivate:[AuthGuard]},
  {path: 'szallitas',component: SzallitasComponent,canActivate:[AuthGuard]},
  {path: 'addfood',component: AddfoodComponent,canActivate:[Auth2Guard]},
  {path: 'modify/:name',component: ModifyfoodComponent,canActivate:[Auth2Guard]},
  {path: 'basket',component: BasketComponent,canActivate:[AuthGuard]},
  {path: 'done',component: DoneComponent,canActivate:[AuthGuard]},
  //{path: 'second/:id',component: SecondComponent,canActivate:[AuthGuard]},
  {path: '**',component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
