import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedicComponent } from './medic/medic.component';
import { TopbarComponent } from './topbar/topbar.component';
import { PanierComponent } from './panier/panier.component';
import { BtnQuantityComponent } from './btn-quantity/btn-quantity.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MedicComponent,
    TopbarComponent,
    PanierComponent,
    BtnQuantityComponent,
    CalculatriceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
