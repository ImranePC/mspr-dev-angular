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
import { Globals } from './globals';
import { ProfilComponent } from './profil/profil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { OfficineComponent } from './officine/officine.component';
import { OfficineChangeComponent } from './officine-change/officine-change.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MapComponent } from './map/map.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MedicComponent,
    TopbarComponent,
    PanierComponent,
    BtnQuantityComponent,
    CalculatriceComponent,
    ProfilComponent,
    OfficineComponent,
    OfficineChangeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC7IwiudWCwF5MaJMMAVyWDITbGpa-R67c',
      libraries: ['places']
    }),
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
