import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SzallitasComponent } from './szallitas/szallitas.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { ModifyfoodComponent } from './modifyfood/modifyfood.component';
import { BasketComponent } from './basket/basket.component';
import { DoneComponent } from './done/done.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    SzallitasComponent,
    AddfoodComponent,
    ModifyfoodComponent,
    BasketComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
