import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { Officine } from '../models/officine';
import { SlimapiService } from '../services/slimapi.service';

@Component({
  selector: 'app-officine',
  templateUrl: './officine.component.html',
  styleUrls: ['./officine.component.css']
})
export class OfficineComponent implements OnInit {
  officine!: Officine;
  stock!: any[];
  orders!: any[];
  displayedColumns: string[] = ['amount', 'medic']
  displayedColumns2: string[] = ['created_at', 'amount', 'medic']

  constructor(private globals: Globals, private slimapi: SlimapiService) { }

  ngOnInit(): void {
    this.globals.isConnected();
    if (this.globals.getSelectedOfficineId() == undefined) {
      console.log('Slow loading ... retry in 1 sec');

      // Delay to prevent undefined value
      setTimeout(() => {
        this.getMyOfficine();
      }, 1000);

    } else {
      this.getMyOfficine();
    }
  }

  getMyOfficine() {
    let myId = this.globals.getSelectedOfficineId();
    this.slimapi.getOfficine(myId).subscribe(result => {
      this.officine = result.data;
    });

    this.slimapi.getOfficineStock(myId).subscribe(result => {
      this.stock = result.data;
      console.log(result.data);
    })

    this.slimapi.getOfficineOrders(myId).subscribe(result => {
      this.orders = result.data;
      console.log(result.data);
    })
  }

}
