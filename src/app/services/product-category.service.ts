import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  API_URI = 'http://54.80.11.131/api/v1';

  constructor(private http: HttpClient) { }

  getCategories() {    
    return this.http.get(`${this.API_URI}/category_product/list`);
  }
}
