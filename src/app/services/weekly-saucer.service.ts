import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeeklySaucerService {
  
  API_URI = 'http://54.80.11.131/api/v1';

  constructor(private http: HttpClient) { }

  getDailySpecial(idRest: string, date: any) {
    return this.http.get(`${this.API_URI}/weekly_saucer/list_date/${idRest}/${date}`);
  }
}
