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

  getOfficines() {
    return this.http.get<CustomResponse>(this.BASE_URL + "/officines");
  }

  getOfficine(id: number) {
    return this.http.get<CustomResponse>(this.BASE_URL + "/officine/" + id);
  }

  // To do
  getClosestOfficine() {
    return this.getOfficine(1);
  }

  getOfficineOrders(id: number) {
    return this.http.get<CustomResponse>(this.BASE_URL + "/officine/orders/" + id);
  }

  getOfficineStock(id: number) {
    return this.http.get<CustomResponse>(this.BASE_URL + "/officine/stocks/" + id);
  }

  async postOrder(orderForm: FormData) {
    await this.http.post<any>(this.BASE_URL + "/order", orderForm).toPromise();
  }

  async postConn(userForm: FormData) {
    return await this.http.post<any>(this.BASE_URL + "/user/auth", userForm).toPromise();
  }

}
