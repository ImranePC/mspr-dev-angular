import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Globals } from '../globals';
import { Officine } from '../models/officine';
import { SlimapiService } from '../services/slimapi.service';

@Component({
  selector: 'app-officine-change',
  templateUrl: './officine-change.component.html',
  styleUrls: ['./officine-change.component.css']
})
export class OfficineChangeComponent implements OnInit {
  officines: Officine[] = [];
  selectedId!: number;

  constructor(private slimapi: SlimapiService, private globals: Globals, private router: Router) { }

  ngOnInit(): void {
    this.slimapi.getOfficines().subscribe(element => this.officines = element.data);
  }

  validateSelection() {
    this.globals.setSelectedOfficineId(this.selectedId);
    this.router.navigate(['/officine']);
  }

  setSelectedId(value: any) {
    this.selectedId = value;
  }

}
