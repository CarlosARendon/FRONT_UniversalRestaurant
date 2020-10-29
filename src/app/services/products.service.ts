import { Injectable } from '@angular/core';
//este modulo sera encargado de hacer las peticiones http
//para poder pedir datos
import { HttpClient, HttpClientModule } from '@angular/common/http';

//importo la interfaz 'Product' desde 'models'
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //API_URI = 'http://52.44.238.142:3300/api';
  API_URI = 'http://54.80.11.131/api/v1';
  
  constructor(private http: HttpClient) {}

  //METODOS

  getProducts() {    
    return this.http.get(`${this.API_URI}/saucer/list`);
  }

  getProduct(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  saveProduct(product: Product){
    return this.http.post(`${this.API_URI}/games`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  //para obtener la respuesta
  //Un observable que me retorna un objeto de tipo producto
  updateProduct(id, updatedProduct: Product):Observable<Product>{
    return this.http.put(`${this.API_URI}/games/${id}`, updatedProduct);
  }
}
