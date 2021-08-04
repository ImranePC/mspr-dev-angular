import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomResponse } from '../models/customresponse';
import { IOrder } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class SlimapiService {
  BASE_URL = "https://sinane.fr";

  constructor(private http: HttpClient) { }

  getMedics() {
    return this.http.get<CustomResponse>(this.BASE_URL + "/medics");
  }

  async postOrder(form: FormData) {
    return this.http.post<any>(this.BASE_URL + "/order", form).subscribe(data => {
      console.log(data);
    });
  }

}
