import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OfficineChangeComponent } from './officine-change/officine-change.component';
import { OfficineComponent } from './officine/officine.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'officine', component: OfficineComponent},
  {path: 'select-officine', component: OfficineChangeComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
