import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpClient: HttpClient = inject(HttpClient);

  register(username: string, email:string, password: string): Subscription {
    return this.httpClient.post<void>("http://localhost:8080/auth/register", {
      "username":username, 
      "email":email, 
      "password":password, 
      "role":"ADMIN"
    }
    ).subscribe(
      (val) => {console.log(val);}
    )
  }

  login(username: string, password:string): Subscription {
    return this.httpClient.post("http://localhost:8080/auth/login", {
      "username": username,
      "password": password
    }, {responseType: 'text'})
    .subscribe(
      (val) => console.log(val)
    )
  }

  constructor() { }
}
