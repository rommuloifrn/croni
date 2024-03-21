import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  http: HttpClient = inject(HttpClient);

  username = '';
  email = '';
  password = '';

  onClick(): void {
    
    console.log("vimasdasdas");
    
    
    this.http.post<void>("http://localhost:8080/auth/register", {"username":this.username, "email":this.email, "password":this.password, "role":"ADMIN"}).subscribe(
      (val) => {
        console.log(val);
      }
    )
    
    
  }
  
}
