import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlimapiService {
  BASE_URL = "https://sinane.fr";

  constructor(private http: HttpClient) { }

  getMedics() {
    return this.http.get(this.BASE_URL + "/medics");
  }

}
