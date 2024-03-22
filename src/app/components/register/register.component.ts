import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

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
  authService: AuthService = inject(AuthService);

  username = '';
  email = '';
  password = '';

  onClick(): void {
    this.authService.register(this.username, this.email, this.password);
  }
  
}
