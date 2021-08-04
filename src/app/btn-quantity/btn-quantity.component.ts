import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-quantity',
  templateUrl: './btn-quantity.component.html',
  styleUrls: ['./btn-quantity.component.css']
})
export class BtnQuantityComponent implements OnInit {
  @Input() amount: number = 1;
  @Input() index!: number;
  @Output() updateQuantity = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  minus():void {
    if (this.amount > 1) {
      this.amount--;
      this.update();
    }
  }

  add():void {
    if (this.amount < 999) {
      this.amount++;
      this.update();
    }
  }

  setAmount(event: any): void {
    let value = event.value;
    if (value > 0 && value < 999) {
      this.amount = value;
      this.update();
    } else {
      if (this.amount < 10) {
        this.amount = 1;
        //event.value = 1;
      } else {
        this.amount = 999;
        event.value = 999;
      }
      this.update();
    }
    
  }

  update(): void {
    this.updateQuantity.next([this.index, this.amount]);
  }

}
