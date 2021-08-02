import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomResponse } from '../models/customresponse';

@Injectable({
  providedIn: 'root'
})
export class SlimapiService {
  BASE_URL = "https://sinane.fr";

  constructor(private http: HttpClient) { }

  getMedics() {
    return this.http.get<CustomResponse>(this.BASE_URL + "/medics");
  }

}
