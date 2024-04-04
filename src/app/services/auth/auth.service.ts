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

  // login(username: string, password:string): Subscription {
  //   return this.httpClient.post("http://localhost:8080/auth/login", {
  //     "username": username,
  //     "password": password
  //   }, {responseType: 'text'})
  //   .subscribe(
  //     (val) => {
  //       localStorage.setItem("JWT", val);
  //       console.log("token é:"+localStorage.getItem("JWT"));
  //     }
  //   )
  // }

  async login(usernameInput: string, passwordInput:string): Promise<boolean> {
    //const data = {"username": username,"password":password}
    const response = await fetch(
      "http://localhost:8080/auth/login",
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({username:usernameInput, password:passwordInput}, null)
      }
      )
      console.log("response status code é: " + response.status);
      if (response.status == 200) {
        const data = await response.json() ?? {};
        localStorage.setItem("JWT", data.token);
        console.log("token é:"+localStorage.getItem("JWT"));
        return true;
      } else {
        return false;
      }
      
      
      //return await console.log(data);
      
    
      

    
  }

  constructor() { }
}
