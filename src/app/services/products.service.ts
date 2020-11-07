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
  //PRODUCTOS POR RESTAURANTE
  getProducts(idR: string) {    
    return this.http.get(`${this.API_URI}/product/list/${idR}`);
  }
  getProduct(idR: string, idP: string) {
    return this.http.get(`${this.API_URI}/product/show/${idR}/${idP}`);
  }
  getProductByName(idR: string, idP: string) {
    return this.http.get(`${this.API_URI}/product/show_by_name/${idR}/${idP}`);
  }
  saveProduct(product: Product){
    return this.http.post(`${this.API_URI}/games`, product);
  }
  deleteProduct(idR: string, idP: string) {
    return this.http.delete(`${this.API_URI}/product/delete/${idR}/${idP}`);
  }
  //para obtener la respuesta
  //Un observable que me retorna un objeto de tipo producto
  /*updateProduct(id, updatedProduct: Product):Observable<Product>{
    return this.http.put(`${this.API_URI}/product/update/${id}`, updatedProduct);
  }*/

  //PLATOS POR RESTAURANTE
  getPlates(idR: string) {    
    return this.http.get(`${this.API_URI}/saucer/list/${idR}`);
  }
  getPlate(idR: string, idP: string) {    
    return this.http.get(`${this.API_URI}/saucer/show/${idR}/${idP}`);
  }
}
