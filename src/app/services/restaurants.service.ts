import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  //API_URI = 'http://52.44.238.142:3300/api';
  API_URI = 'http://54.80.11.131/api/v1';

  constructor(private http: HttpClient) { }

  //METODOS
  getRestaurants() {    
    return this.http.get(`${this.API_URI}/restaurants/list`);
  }

  getRestaurant(id: string) {
    return this.http.get(`${this.API_URI}/restaurants/${id}`);
  }

  saveRestaurant(restaurant: Restaurant){
    return this.http.post(`${this.API_URI}/restaurants/Register`, restaurant);
  }

  deleteRestaurant(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  //para obtener la respuesta
  //Un observable que me retorna un objeto de tipo producto
  updateRestaurant(id, updatedRestaurant: Restaurant):Observable<Restaurant>{
    return this.http.put(`${this.API_URI}/games/${id}`, updatedRestaurant);
  }
}
