// src/app/users/users.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable,of, from } from 'rxjs';
import { CookieService } from "ngx-cookie-service";


@Injectable({
  providedIn: "root"
})
export class UsersService {

  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(user: any): Observable<any> {
    //Cambiar: https://reqres.in/api/login por el link de la api
    return this.http.post("https://reqres.in/api/login", user);
  }

  register(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/register", user);
  }

  setToken(token : string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
  
  getUserLogged() {
    const token = this.getToken();
    //TODO: logue, enviamos el token a la api.
    //Falta validar el tipo de usuario que devuelve
    //falta crear el compoenente home https://codingpotions.com/angular-login-sesion
    // Aquí iría el endpoint para devolver el usuario para un token
  }
}