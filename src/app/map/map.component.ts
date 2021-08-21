import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SlimapiService } from '../services/slimapi.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Output() onMarkerClick = new EventEmitter<any>();
  places: any;
  lat = 46.2734;
  long = 2.17832031;
  clickedId!: number;

  
  constructor(private slimapi: SlimapiService) { }

  ngOnInit(): void {
    this.slimapi.getOfficines().subscribe(data => {
      this.places = data.data;
    })
  }

  setSelection(id: number) {
    this.onMarkerClick.next(id);
  }

}
