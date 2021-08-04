import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IMedic } from '../models/medic';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styleUrls: ['./medic.component.css']
})
export class MedicComponent implements OnInit {
  @Input() medic!: IMedic;
  @Output() actionPanier = new EventEmitter<any>();
  clicked:boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

  action(): void {
    this.clicked = !this.clicked
    this.actionPanier.next([this.medic, this.clicked]);
  }

}
