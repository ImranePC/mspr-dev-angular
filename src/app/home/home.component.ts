import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../globals';
import { IMedic } from '../models/medic';
import { PanierComponent } from '../panier/panier.component';
import { SlimapiService } from '../services/slimapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(PanierComponent) panierElement!:PanierComponent;
  medics: IMedic[] = [];
  medicsPanier: IMedic[] = [];
  quantityPanier: number[] = [];

  constructor(private slimapi: SlimapiService, private globals: Globals, private router: Router) { }

  ngOnInit(): void {
    this.globals.isConnected();

    this.slimapi.getMedics().subscribe(content => {
      this.medics = content.data;
    })
  }

  actionOnPanier(value: any) {
    let medic = value[0];
    if (value[1]) {
      // Add
      this.medicsPanier.push(medic);
      this.quantityPanier.push(1);
    } else {
      // Remove
      this.quantityPanier.splice(this.medicsPanier.indexOf(medic), 1);
      this.medicsPanier.splice(this.medicsPanier.indexOf(medic), 1);
    }
  }

}
