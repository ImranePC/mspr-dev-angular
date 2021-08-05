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

  //postOrder(forms: FormData[]) {
  //  forms.map(form => this.http.post<any>(this.BASE_URL + "/order", form))
//
  //  return Promise.all(forms);
  //}

  async postOrder(form: FormData) {
    await this.http.post<any>(this.BASE_URL + "/order", form).toPromise();
  }

}
