import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../globals';
import { User } from '../models/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userData!: User;

  constructor(private globals: Globals, private router: Router) { }

  ngOnInit(): void {
    this.globals.isConnected();
    this.userData = this.globals.connected.user;
  }

  userDisconnect(): void {
    this.globals.unsetConnectionValues();
    this.router.navigate(["/login"]);
  }

}
