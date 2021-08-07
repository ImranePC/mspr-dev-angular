import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../globals';
import { Login } from '../models/login';
import { SlimapiService } from '../services/slimapi.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  login: Login = {
    name: 'user',
    password: 'pass',
  };

  error: string = '';

  constructor(private slimapi: SlimapiService, private globals: Globals, private router: Router) { }

  ngOnInit(): void {
    this.globals.isConnected(true);
  }

  validateForm(): void {
    if (this.login.name == '' || this.login.password == '') {
      this.error = "Veuillez remplir tous les champs.";
    } else {
      this.error = '';
      this.tryConnection();
    }
  }

  tryConnection(): boolean {
    let userForm = new FormData();
    userForm.set('username', this.login.name);
    userForm.set('password', this.login.password);

    this.slimapi.postConn(userForm).then(result => {
      if (result.data.connection == true) {
        // Connected
        this.globals.setConnectionValues(result.data.connection, result.data.user);
        this.globals.isConnected(true);
      } else {
        // Failed
        this.login.password = '';
        
        if (result.data.error == 'FALSE_USERNAME') {
          this.error = "Nom d'utilisateur incorrect";
        } else if (result.data.error == 'FALSE_PASSWORD') {
          this.error = "Mot de passe incorrect";
        }
      }
    }).catch(e => console.error(e));

    return false;
  }

  removeError():void {
    this.error = '';
  }

}
