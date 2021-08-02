import { Component, Input, OnInit } from '@angular/core';
import { IMedic } from '../models/medic';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styleUrls: ['./medic.component.css']
})
export class MedicComponent implements OnInit {
  @Input()medic!: IMedic;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
