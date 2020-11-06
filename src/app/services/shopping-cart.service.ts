import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  API_URI = 'http://54.80.11.131/api/v1';

  constructor(private http: HttpClient) { }

  addItem(product: any) {
    return this.http.post(`${this.API_URI}/shopping_cart/add_item`,product);
  }
  showCart(idShopCart: string) {
    return this.http.get(`${this.API_URI}/shopping_cart/show/${idShopCart}`);
  }
  deleteItem(idItem: string ) {
    return this.http.delete(`${this.API_URI}/api/v1/shopping_cart/delete_item/${idItem}`);
  }
}
