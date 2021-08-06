import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user';
import { SlimapiService } from '../services/slimapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: IUser = {
    name: '',
    password: '',
  };

  error: string = '';

  constructor(private slimapi: SlimapiService) { }

  ngOnInit(): void {
  }

  validateForm(): void {
    if (this.user.name == '' || this.user.password == '') {
      this.error = "Veuillez remplir tous les champs.";
    } else {
      this.error = '';
      this.tryConnection();
    }
  }

  tryConnection(): boolean {
    let userForm = new FormData();
    userForm.set('username', this.user.name);
    userForm.set('password', this.user.password);

    this.slimapi.postConn(userForm).then(a => {
      console.log(a);
    }).catch(e => console.log(e));

    return false;
  }

}
