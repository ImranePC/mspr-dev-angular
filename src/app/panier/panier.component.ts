import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Globals } from '../globals';
import { IMedic } from '../models/medic';
import { SlimapiService } from '../services/slimapi.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  @Input() panier: IMedic[] = [];
  @Input() quantityPanier: number[] = [];
  @ViewChild('recapBox') recapBox!: ElementRef;
  @ViewChild('panierProcess') processBox!: ElementRef;
  prices: number[] = [];
  discounts: number[] = [];
  totalPrice: number = 0;
  showPurchasePage: boolean = false;
  showLoadingPage: boolean = false;
  loadingComplete: boolean = false;

  constructor(private slimapi: SlimapiService, private global: Globals) {
    
  }

  ngOnInit(): void {
    
  }

  validate(): void {
    this.switchRecapMode();
  }

  switchRecapMode(): void {
    this.showPurchasePage = !this.showPurchasePage;
    this.updateTotalPrice();
  }

  setQuantity(value: any): void {
    let index = value[0];
    let quantity = value[1];
    this.quantityPanier[index] = quantity;
    this.updateTotalPrice();
  }

  updateTotalPrice(): void {
    this.prices = [];
    for (let i = 0; i < this.quantityPanier.length ; i++) {
      let price = this.panier[i].prix;
      let quantity = this.quantityPanier[i];
      let discountRate = this.panier[i].discount;
      this.prices[i] = Math.round((price * quantity + Number.EPSILON) * 100 * (1 - discountRate)) / 100;
    }

    // Array sum
    if (this.prices.length > 0) {
      this.totalPrice = Math.round(this.prices.reduce((a, b) => a + b) * 100) / 100;
    }
  }

  sendOrder(): void {
    // Send order for each medic
    let officineId = this.global.getSelectedOfficineId();
    this.showLoadingPage = true;

    for (let i = 0; i < this.quantityPanier.length; i++) {
      // Init
      let amount = this.quantityPanier[i];
      let medicId = this.panier[i].id;
      let form = new FormData();

      // Create form
      form.set('amount', amount.toString());
      form.set('officine_id', officineId.toString());
      form.set('medic_id', medicId.toString());
      
      // Post
      this.slimapi.postOrder(form).then(a => {
        if (i == this.quantityPanier.length - 1) {
          this.loadingComplete = true; 
        }
      }).catch(e => console.error('API Error'));
    }
  }

  resetShop(): void {
    window.location.reload();
  }

}
