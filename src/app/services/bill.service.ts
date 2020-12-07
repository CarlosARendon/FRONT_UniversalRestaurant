import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  API_URI = 'http://54.80.11.131/api/v1';
  
  constructor(private http: HttpClient) {}

  createBill(bill: any){
    return this.http.post(`${this.API_URI}/restaurant/bill`, bill);
  }

  getBill(){
    return this.http.get(`${this.API_URI}/restaurant/bill-list`);
  }
}
