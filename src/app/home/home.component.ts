import { Component, OnInit } from '@angular/core';
import { IMedic } from '../models/medic';
import { SlimapiService } from '../services/slimapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  medics: IMedic[] = [];

  constructor(private slimapi: SlimapiService) { }

  ngOnInit(): void {
    this.slimapi.getMedics().subscribe(content => {
      this.medics = content.data;
    })

  }

  

}
