import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  totalPrice: number = 0;
  showPurchasePage: boolean = true;

  constructor(private slimapi: SlimapiService) {
    
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
    console.log('Update');
    this.prices = [];
    for (let i = 0; i < this.quantityPanier.length ; i++) {
      let price = this.panier[i].prix;
      let quantity = this.quantityPanier[i];
      this.prices[i] = Math.round((price * quantity) * 1000) / 1000;
    }

    // Array sum
    if (this.prices.length > 0) {
      this.totalPrice = this.prices.reduce((a, b) => a + b);
    }
  }

  sendOrder(): void {
    // Send order for each medic
    let officineId = 1;

    for (let i = 0; i < this.quantityPanier.length; i++) {
      // Init
      let form = new FormData();
      let amount = this.quantityPanier[i];
      let medicId = this.panier[i].id;

      // Create form
      form.set('amount', amount.toString());
      form.set('officine_id', officineId.toString());
      form.set('medic_id', medicId.toString());
      
      // Post
      this.slimapi.postOrder(form);
    }

  }

}
