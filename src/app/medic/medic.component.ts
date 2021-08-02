import { Component, Input, OnInit } from '@angular/core';
import { Medic } from '../models/medic';

@Component({
  selector: 'app-medic',
  templateUrl: './medic.component.html',
  styleUrls: ['./medic.component.css']
})
export class MedicComponent implements OnInit {
  @Input() medic: any; 

  constructor() { }

  ngOnInit(): void {
  }

}
