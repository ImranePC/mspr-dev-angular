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

  async postOrder(orderForm: FormData) {
    await this.http.post<any>(this.BASE_URL + "/order", orderForm).toPromise();
  }

  async postConn(userForm: FormData) {
    return await this.http.post<any>(this.BASE_URL + "/user/auth", userForm).toPromise();
  }

}
