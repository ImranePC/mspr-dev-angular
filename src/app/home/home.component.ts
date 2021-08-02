import { Component, OnInit } from '@angular/core';
import { SlimapiService } from '../services/slimapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  medics: any;

  constructor(private slimapi: SlimapiService) { }

  ngOnInit(): void {
    this.slimapi.getMedics().subscribe(content => {
      // A refactoriser
      this.medics = content;
      this.medics = this.medics.data;
      console.log(this.medics);
    })

  }

  

}
